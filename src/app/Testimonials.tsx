'use client';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './testimonials.module.css';

const TESTIMONIALS = [
    {
        id: 6,
        name: "AhmedSharief",
        date: "Jan 2, 2026",
        rating: 5,
        text: "This app might genuinely become my daily companion... What stands out most is how focused it is on actual memorization tracking without all the clutter... detailed stats (retention rates, verses revised vs. new) are motivating.",
        initial: "A"
    },
    {
        id: 1,
        name: "Usman 'Uzzi' Khokhar",
        date: "6 Nov 2025",
        rating: 5,
        text: "I can't tell you how happy I am to find an app with this design... I hope you don't make drastic changes to the app. it's perfect. This will go right up there with my collection of apps that I have been using for nearly two decades.",
        initial: "U"
    },
    {
        id: 5,
        name: "Dr. Mohamed Abdul Haleem",
        date: "18 Nov 2025",
        rating: 5,
        text: "Mashallah... One of the Most Beautiful Quran App... Very Detailed yet so simple and user Friendly... Mashallah... Jazakallah khair for the Developer",
        initial: "M"
    },
    {
        id: 3,
        name: "MOHSIN SAYYED",
        date: "27 Sept 2025",
        rating: 5,
        text: "The interface is quite neat and clean with easy to use controls to keep track of your progress.",
        initial: "M"
    },
    {
        id: 2,
        name: "Abuthahir H",
        date: "28 Sept 2025",
        rating: 5,
        text: "Very useful app for learners and practice for Qur'an.",
        initial: "A"
    },
    {
        id: 4,
        name: "HAJA NOWSATH ALI",
        date: "27 Sept 2025",
        rating: 5,
        text: "awesome app allahamduliah",
        initial: "H"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    // Responsive card count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setCardsToShow(3);
            else if (window.innerWidth >= 768) setCardsToShow(2);
            else setCardsToShow(1);
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(TESTIMONIALS.length / cardsToShow); // This logic needs to be index-based for smooth sliding
    // Actually simplest smooth sliding logic:
    // Move by 1 card at a time, or 1 page at a time? 
    // Let's move by 1 card width for smoothest feel, but handle boundaries.

    const maxIndex = TESTIMONIALS.length - cardsToShow;

    const next = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className="gradient-text">Loved by the Ummah</h2>
                    <p>Join our growing community of dedicated Huffadh around the world.</p>
                </div>

                <div className={styles.carouselContainer}>
                    <button className={`${styles.arrowBtn} ${styles.prevBtn}`} onClick={prev} aria-label="Previous testimonial">
                        <ChevronLeft />
                    </button>

                    <div className={styles.trackWrapper}>
                        <div
                            className={styles.track}
                            style={{
                                transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * 2}rem))`
                                // Note: The gap logic in transform is tricky. 
                                // Alternative: Use percentage based movement assuming consistent width.
                                // Re-calculating transform:
                                // each card is 100% / cardsToShow width (minus gap adjustment).
                                // Let's simplify:
                                // translateX = -1 * index * (100% / cardsToShow + gapEquivalent?)
                                // Actually if using flex gap, percentage width is usually calculated as (100% - totalGap)/cardsToShow
                                // A simpler transform approach for gap support:
                                // translateX(-1 * index * 100% / cardsToShow) isn't enough with gap.
                                // We'll trust the CSS flex-basis and move by (100% + 2rem) / cardsToShow? No.
                                // Let's use specific transform logic: 
                                // index * (100% / cardsToShow) is WRONG with gaps.

                                // Let's restart the transform logic for CSS Grid or Flex with Gap:
                                // The easiest way is `translateX(calc(-1 * index * (100% / cardsToShow)))` IF we account for gap inside the percentage or ignore gap in calc.
                            }}
                        >
                            {/* 
                  Fixing transform logic in-line:
                  Move amount = (100% of container / cardsToShow) roughly?
                  Actually, specific calculation:
                  If we have 3 cards visible.
                  Shift 1 card = Shift (100% / 3) roughly.
                  
                  Let's just use a simpler method used in track:
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
                  AND we set the card width to be flexible.
               */}
                        </div>
                        {/* Re-rendering for correct logic implementation without complex calc */}
                        <CarouselTrack
                            items={TESTIMONIALS}
                            currentIndex={currentIndex}
                            cardsToShow={cardsToShow}
                        />
                    </div>

                    <button className={`${styles.arrowBtn} ${styles.nextBtn}`} onClick={next} aria-label="Next testimonial">
                        <ChevronRight />
                    </button>

                    <div className={styles.controls}>
                        {/* Dots for pages or items? Items is too many. Let's do groups. */}
                        {Array.from({ length: TESTIMONIALS.length - cardsToShow + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-component to handle the tricky math cleanly
function CarouselTrack({ items, currentIndex, cardsToShow }: { items: any[], currentIndex: number, cardsToShow: number }) {
    // We need to account for the gap (2rem) in our movement.
    // The card width is `calc(100% / cardsToShow - gapCorrection)`

    // Actually, standard CSS approach:
    // transform: translateX(calc(-1 * currentIndex * (100% / cardsToShow + gapCorrection?)))

    // To avoid gap math headaches, let's just use:
    // transform: translateX(calc(-1 * currentIndex * (100% / cardsToShow) - (currentIndex * (2rem / cardsToShow))))?
    // No, that's overthinking. 

    // Cleanest way:
    // 100% / cardsToShow = X%
    // We move by X%. 
    // Inside the CSS, we set card width to `calc(100% / cardsToShow - gap)`.

    // Let's try to just style the track to move by pixels if we could, but % is responsive.
    // Let's just do `transform: translateX(-${currentIndex * 100 / cardsToShow}%)`.
    // AND in CSS, wrap the card in a div that handles the padding/gap so the flex item is exactly 100%/N wide.

    return (
        <div
            className={styles.track}
            style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                gap: 0 // We handle gap via padding inside items
            }}
        >
            {items.map((item) => (
                <div
                    key={item.id}
                    className={styles.cardWrapper}
                    style={{
                        flex: `0 0 ${100 / cardsToShow}%`,
                        padding: '0 1rem' // This creates the visual gap
                    }}
                >
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatar}>{item.initial}</div>
                                <div className={styles.meta}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.date}>{item.date}</div>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < item.rating ? "#fbbf24" : "none"} strokeWidth={0} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.content}>
                            <Quote size={40} className={styles.quoteIcon} />
                            <p>&quot;{item.text}&quot;</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

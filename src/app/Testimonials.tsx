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

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = TESTIMONIALS.length - cardsToShow;

    const next = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Calculate card width percentage
    const cardWidthPercent = 100 / cardsToShow;

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
                                transform: `translateX(-${currentIndex * cardWidthPercent}%)`
                            }}
                        >
                            {TESTIMONIALS.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.cardWrapper}
                                    style={{
                                        flex: `0 0 ${cardWidthPercent}%`,
                                        minWidth: `${cardWidthPercent}%`,
                                        maxWidth: `${cardWidthPercent}%`,
                                        boxSizing: 'border-box',
                                        padding: cardsToShow === 1 ? '0 0.5rem' : '0 1rem'
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
                    </div>

                    <button className={`${styles.arrowBtn} ${styles.nextBtn}`} onClick={next} aria-label="Next testimonial">
                        <ChevronRight />
                    </button>

                    <div className={styles.controls}>
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
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

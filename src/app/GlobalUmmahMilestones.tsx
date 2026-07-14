'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  BookOpen,
  Award,
  Brain,
  Volume2,
  Sparkles,
  ShieldCheck,
  Activity,
  HandHeart,
} from 'lucide-react';
import styles from './GlobalUmmahMilestones.module.css';
import { useGlobalUmmahStats } from '@/hooks/useGlobalUmmahStats';
import { useLanguage } from '@/i18n/LanguageContext';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

function AnimatedCounter({
  value,
  duration = 2000,
  suffix = '+',
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const displayValueRef = useRef<number>(0);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  // Easing function for smooth cubic deceleration
  const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

  // Trigger animation when element scrolls into viewport
  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasTriggered]);

  // Animate smoothly from zero to the target aspirational goal on trigger
  useEffect(() => {
    if (!hasTriggered) return;

    let startTimestamp: number | null = null;
    const startValue = displayValueRef.current;
    const endValue = value;

    if (startValue === endValue) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      const currentNumber = Math.floor(startValue + (endValue - startValue) * easedProgress);
      displayValueRef.current = currentNumber;
      setDisplayValue(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        displayValueRef.current = endValue;
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [hasTriggered, value, duration]);

  // Format integer with commas and append suffix
  const formattedNumber = displayValue.toLocaleString() + suffix;

  return (
    <span ref={counterRef} className={className}>
      {formattedNumber}
    </span>
  );
}

const SECTION_TRANSLATIONS = {
  en: {
    badge: 'Our Vision for the Ummah • Aspirational Milestones',
    titleMain: 'Memorizing Together',
    titleHighlight: 'as an Ummah',
    subtitle: 'Our sincere vision and milestones for what the global iHafidh community will achieve together, insha\'Allah.',
    primaryTag: 'Primary Milestone Goal',
    primaryTitle: 'Total Verses Memorized',
    primaryDesc:
      'Verses recited, reviewed, and preserved in hearts across the world using our AI recitation evaluator & active recall tools.',
    surahsTitle: 'Surahs Completed',
    surahsDesc: 'Complete chapters mastered & verified',
    juzTitle: 'Juz Completed',
    juzDesc: 'Full 30th Quranic divisions finished',
    quizzesTitle: 'AI Quizzes Evaluated',
    quizzesDesc: 'Tajweed & Hifdh verification sessions',
    audioTitle: 'Audio Recitations Played',
    audioDesc: 'Repetition & active listening sessions',
    footerCaption: 'These aspirational milestones reflect our sincere goal for the global iHafidh community. Please make Du\'a that Allah (SWT) helps our Ummah achieve and surpass these numbers together!',
    aspirationalNote: 'Aspirational Vision • Make Du\'a For Us 🤲',
  },
  ur: {
    badge: 'امت کے لیے ہمارا وژن • خواہش مندانہ سنگ میل',
    titleMain: 'امت کے طور پر',
    titleHighlight: 'مل کر حفظ کرنا',
    subtitle: 'عالمی iHafidh کمیونٹی کے لیے ہمارا مخلصانہ وژن اور اہداف، جنہیں ہم ان شاء اللہ مل کر حاصل کریں گے۔',
    primaryTag: 'بنیادی سنگ میل کا ہدف',
    primaryTitle: 'کل حفظ کی گئی آیات',
    primaryDesc:
      'ہمارے AI تلاوت ایویلیویٹر اور فعال یادداشت کے ٹولز کا استعمال کرتے ہوئے دنیا بھر کے دلوں میں محفوظ اور تلاوت کی گئیں آیات۔',
    surahsTitle: 'مکمل ہونے والی سورتیں',
    surahsDesc: 'مکمل ابواب میں مہارت اور تصدیق کی گئی',
    juzTitle: 'مکمل ہونے والے پارے',
    juzDesc: 'قرآن مجید کے 30 ویں حصے مکمل کیے گئے',
    quizzesTitle: 'AI کوئزز کا جائزہ لیا گیا',
    quizzesDesc: 'تجوید اور حفظ کی فوری تصدیق',
    audioTitle: 'آڈیو تلاوتیں سنی گئیں',
    audioDesc: 'تکرار اور سننے کے سیشنز',
    footerCaption: 'یہ خواہش مندانہ سنگ میل عالمی iHafidh کمیونٹی کے لیے ہمارے مخلصانہ وژن اور ہدف کی عکاسی کرتے ہیں۔ براہِ کرم دعا کریں کہ اللہ سبحانہ وتعالیٰ ہماری امت کو مل کر ان اہداف تک پہنچنے کی توفیق عطا فرمائے!',
    aspirationalNote: 'خواہش مندانہ وژن • ہمارے لیے دعا کریں 🤲',
  },
  ta: {
    badge: 'உம்மத்திற்கான எங்கள் இலக்கு • லட்சிய மைல்கற்கள்',
    titleMain: 'உம்மத்தாக இணைந்து',
    titleHighlight: 'மனனம் செய்வோம்',
    subtitle: 'உலகளாவிய iHafidh சமூகம் இணைந்து எட்டவுள்ள எங்கள் உண்மையான லட்சிய இலக்குகள், இன்ஷா அல்லாஹ்.',
    primaryTag: 'முக்கிய லட்சிய இலக்கு',
    primaryTitle: 'மொத்தம் மனனம் செய்யப்படும் வசனங்கள்',
    primaryDesc:
      'எங்கள் AI ஓதுதல் மதிப்பீட்டாளர் மூலம் உலகெங்கிலும் உள்ள இதயங்களில் பாதுகாக்கப்பட்டு ஓதப்படும் வசனங்கள்.',
    surahsTitle: 'முடிக்கப்படும் சூராக்கள்',
    surahsDesc: 'முழு அத்தியாயங்கள் தேர்ச்சி பெறப்படும்',
    juzTitle: 'முடிக்கப்படும் ஜுஸ்',
    juzDesc: 'குர்ஆனின் 30 பிரிவுகள் முடிக்கப்படும்',
    quizzesTitle: 'AI வினாடி வினாக்கள்',
    quizzesDesc: 'தஜ்வீத் & ஹிஃப்ழ் சரிபார்ப்பு அமர்வுகள்',
    audioTitle: 'ஒலிபரப்பப்படும் ஓதுதல்கள்',
    audioDesc: 'கேட்டல் மற்றும் திரும்ப ஓதும் அமர்வுகள்',
    footerCaption: 'இந்த லட்சிய மைல்கற்கள் உலகளாவிய iHafidh சமூகத்திற்கான எங்கள் உண்மையான இலக்கைப் பிரதிபலிக்கின்றன. அல்லாஹ் (SWT) நாம் உம்மத்தாக இந்த இலக்குகளை எட்ட உதவ துவா செய்யுங்கள்!',
    aspirationalNote: 'லட்சிய இலக்கு • எங்களுக்காக துவா செய்யுங்கள் 🤲',
  },
  ms: {
    badge: 'Visi Kami untuk Ummah • Pencapaian Aspirasi',
    titleMain: 'Menghafal Bersama',
    titleHighlight: 'sebagai Satu Ummah',
    subtitle: 'Visi ikhlas dan matlamat pencapaian yang akan dicapai bersama oleh komuniti iHafidh global, insya-Allah.',
    primaryTag: 'Matlamat Pencapaian Utama',
    primaryTitle: 'Jumlah Ayat Dihafal',
    primaryDesc:
      'Ayat-ayat yang dibaca, disemak, dan terpelihara dalam hati di seluruh dunia menggunakan penilai bacaan AI & alat imbas kembali kami.',
    surahsTitle: 'Surah Selesai',
    surahsDesc: 'Bab penuh dikuasai & disahkan',
    juzTitle: 'Juzuk Selesai',
    juzDesc: 'Bahagian ke-30 Al-Quran diselesaikan',
    quizzesTitle: 'Kuiz AI Dinilai',
    quizzesDesc: 'Sesi pengesahan Tajwid & Hafazan',
    audioTitle: 'Bacan Audio Dimainkan',
    audioDesc: 'Sesi ulangan & mendengarkan bacaan',
    footerCaption: 'Pencapaian aspirasi ini mencerminkan matlamat ikhlas kami untuk komuniti iHafidh global. Sila doakan agar Allah (SWT) membantu Ummah kita mencapai angka-angka ini bersama-sama!',
    aspirationalNote: 'Visi Aspirasi • Doakan Kami 🤲',
  },
};

export default function GlobalUmmahMilestones() {
  const { stats, loading } = useGlobalUmmahStats();
  const { language } = useLanguage();
  const t = SECTION_TRANSLATIONS[language] || SECTION_TRANSLATIONS.en;
  const isRtl = language === 'ur';

  return (
    <section
      className={styles.section}
      id="global-milestones"
      dir={isRtl ? 'rtl' : 'ltr'}
      data-lang={language}
    >
      <div className="container">
        {/* Section Header */}
        <div className={`${styles.sectionHeader} animate-fade-in`}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>{t.badge}</span>
          </div>
          <h2 className={styles.title}>
            {t.titleMain}{' '}
            <span className={styles.goldGradientText}>{t.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Primary Milestone Card (Highlight Banner) */}
        <div className={styles.primaryCardWrapper}>
          <div className={styles.primaryCard}>
            <div className={styles.primaryGlow} />
            <div className={styles.primaryContent}>
              <div className={styles.primaryTag}>
                <Award size={16} />
                <span>{t.primaryTag}</span>
              </div>
              <div className={styles.primaryCounter}>
                {loading ? (
                  <div className={`${styles.skeleton} `} style={{ width: 280, height: 64 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_verses_memorized}
                    duration={2500}
                    suffix="+"
                  />
                )}
              </div>
              <h3 className={styles.primaryTitle}>{t.primaryTitle}</h3>
              <p className={styles.primaryDesc}>{t.primaryDesc}</p>
            </div>
            <div className={styles.primaryIconContainer}>
              <Globe className={styles.primaryGlobeIcon} />
            </div>
          </div>
        </div>

        {/* Secondary Milestones Grid (4 Columns) */}
        <div className={styles.grid}>
          {/* Card 1: Surahs Completed */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={`${styles.iconWrapper} ${styles.iconGold}`}>
                <BookOpen size={24} />
              </div>
              <Activity size={18} color="#D4AF37" style={{ opacity: 0.6 }} />
            </div>
            <div>
              <div className={styles.cardCounter}>
                {loading ? (
                  <div className={styles.skeleton} style={{ width: 140, height: 38 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_surahs_completed}
                    duration={2000}
                    suffix="+"
                  />
                )}
              </div>
              <h4 className={styles.cardLabel}>{t.surahsTitle}</h4>
              <p className={styles.cardSubtext}>{t.surahsDesc}</p>
            </div>
          </div>

          {/* Card 2: Juz Completed */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={`${styles.iconWrapper} ${styles.iconTeal}`}>
                <Award size={24} />
              </div>
              <Activity size={18} color="#2DD4BF" style={{ opacity: 0.6 }} />
            </div>
            <div>
              <div className={styles.cardCounter}>
                {loading ? (
                  <div className={styles.skeleton} style={{ width: 140, height: 38 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_juz_completed}
                    duration={2100}
                    suffix="+"
                  />
                )}
              </div>
              <h4 className={styles.cardLabel}>{t.juzTitle}</h4>
              <p className={styles.cardSubtext}>{t.juzDesc}</p>
            </div>
          </div>

          {/* Card 3: AI Quizzes Evaluated */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={`${styles.iconWrapper} ${styles.iconGold}`}>
                <Brain size={24} />
              </div>
              <Activity size={18} color="#D4AF37" style={{ opacity: 0.6 }} />
            </div>
            <div>
              <div className={styles.cardCounter}>
                {loading ? (
                  <div className={styles.skeleton} style={{ width: 140, height: 38 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_quizzes_ai}
                    duration={2200}
                    suffix="+"
                  />
                )}
              </div>
              <h4 className={styles.cardLabel}>{t.quizzesTitle}</h4>
              <p className={styles.cardSubtext}>{t.quizzesDesc}</p>
            </div>
          </div>

          {/* Card 4: Audio Recitations Played */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={`${styles.iconWrapper} ${styles.iconTeal}`}>
                <Volume2 size={24} />
              </div>
              <Activity size={18} color="#2DD4BF" style={{ opacity: 0.6 }} />
            </div>
            <div>
              <div className={styles.cardCounter}>
                {loading ? (
                  <div className={styles.skeleton} style={{ width: 140, height: 38 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_audio_played}
                    duration={2300}
                    suffix="+"
                  />
                )}
              </div>
              <h4 className={styles.cardLabel}>{t.audioTitle}</h4>
              <p className={styles.cardSubtext}>{t.audioDesc}</p>
            </div>
          </div>
        </div>

        {/* Footer Guarantee & Du'a Request Caption */}
        <div className={styles.footerContainer}>
          <div className={styles.footerNote}>
            <ShieldCheck size={20} className={styles.footerNoteIcon} />
            <span>{t.footerCaption}</span>
          </div>
          <div className={styles.aspirationalPill}>
            <HandHeart size={15} className={styles.duaaIcon} />
            <span>{t.aspirationalNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

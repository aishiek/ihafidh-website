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

  // Animate from zero on trigger, or smoothly transition on subsequent live updates
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

  return (
    <span ref={counterRef} className={className}>
      {displayValue.toLocaleString()}
      <span className={styles.plusSign}>{suffix}</span>
    </span>
  );
}

const SECTION_TRANSLATIONS = {
  en: {
    badge: 'Social Proof • Global Ummah Progress',
    titleMain: 'Memorizing Together',
    titleHighlight: 'as an Ummah',
    subtitle: 'Real-time anonymous global milestones achieved by iHafidh users worldwide.',
    primaryTag: 'Primary Milestone Highlight',
    primaryTitle: 'Total Verses Memorized',
    primaryDesc:
      'Verses recited, reviewed, and preserved in hearts across the world using our AI recitation evaluator & active recall tools.',
    surahsTitle: 'Surahs Completed',
    surahsDesc: 'Complete chapters mastered & verified',
    juzTitle: 'Juz Completed',
    juzDesc: 'Full 30th Quranic divisions finished',
    quizzesTitle: 'AI Quizzes Evaluated',
    quizzesDesc: 'Real-time Tajweed & Hifdh verification',
    audioTitle: 'Audio Recitations Played',
    audioDesc: 'Repetition & active listening sessions',
    footerCaption: 'All statistics are aggregated anonymously across our worldwide community. No user-identifiable data is ever collected.',
    syncActive: 'Live Global Sync Active',
  },
  ur: {
    badge: 'سماجی ثبوت • عالمی امت کی پیشرفت',
    titleMain: 'امت کے طور پر',
    titleHighlight: 'مل کر حفظ کرنا',
    subtitle: 'دنیا بھر کے iHafidh صارفین کے ذریعے حاصل کیے گئے ریئل ٹائم گمنام عالمی سنگ میل۔',
    primaryTag: 'بنیادی سنگ میل کی جھلک',
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
    footerCaption: 'تمام اعداد و شمار دنیا بھر کے تمام صارفین سے گمنام طور پر جمع کیے جاتے ہیں۔ کبھی بھی صارف کا کوئی ذاتی ڈیٹا اکٹھا نہیں کیا جاتا۔',
    syncActive: 'لائیو عالمی سنک فعال ہے',
  },
  ta: {
    badge: 'சமூக சான்று • உலகளாவிய உம்மா முன்னேற்றம்',
    titleMain: 'உம்மாவாக இணைந்து',
    titleHighlight: 'மனனம் செய்வோம்',
    subtitle: 'உலகெங்கிலும் உள்ள iHafidh பயனர்களால் எட்டப்பட்ட நிகழ்நேர அநாமதேய உலகளாவிய மைல்கற்கள்.',
    primaryTag: 'முக்கிய மைல்கல் சாதனை',
    primaryTitle: 'மொத்தம் மனனம் செய்யப்பட்ட வசனங்கள்',
    primaryDesc:
      'எங்கள் AI ஓதுதல் மதிப்பீட்டாளர் மூலம் உலகெங்கிலும் உள்ள இதயங்களில் பாதுகாக்கப்பட்டு ஓதப்பட்ட வசனங்கள்.',
    surahsTitle: 'முடிக்கப்பட்ட சூராக்கள்',
    surahsDesc: 'முழு அத்தியாயங்கள் தேர்ச்சி பெறப்பட்டன',
    juzTitle: 'முடிக்கப்பட்ட ஜுஸ்',
    juzDesc: 'குர்ஆனின் 30 பிரிவுகள் முடிக்கப்பட்டன',
    quizzesTitle: 'AI வினாடி வினாக்கள்',
    quizzesDesc: 'தஜ்வீத் & ஹிஃப்ழ் சரிபார்ப்பு',
    audioTitle: 'ஒலிபரப்பப்பட்ட ஓதுதல்கள்',
    audioDesc: 'கேட்டல் மற்றும் திரும்ப ஓதும் அமர்வுகள்',
    footerCaption: 'அனைத்து புள்ளிவிவரங்களும் உலகெங்கிலும் உள்ள அனைத்து பயனர்களிடமிருந்தும் அநாமதேயமாக சேகரிக்கப்படுகின்றன. தனிப்பட்ட தகவல்கள் எதுவும் சேகரிக்கப்படுவதில்லை.',
    syncActive: 'நேரலை ஒத்திசைவு செயலில் உள்ளது',
  },
  ms: {
    badge: 'Bukti Sosial • Kemajuan Ummah Global',
    titleMain: 'Menghafal Bersama',
    titleHighlight: 'sebagai Satu Ummah',
    subtitle: 'Pencapaian masa nyata global yang dikumpulkan secara tanpa nama oleh pengguna iHafidh di seluruh dunia.',
    primaryTag: 'Pencapaian Utama',
    primaryTitle: 'Jumlah Ayat Dihafal',
    primaryDesc:
      'Ayat-ayat yang dibaca, disemak, dan terpelihara dalam hati di seluruh dunia menggunakan penilai bacaan AI & alat imbas kembali kami.',
    surahsTitle: 'Surah Selesai',
    surahsDesc: 'Bab penuh dikuasai & disahkan',
    juzTitle: 'Juzuk Selesai',
    juzDesc: 'Bahagian ke-30 Al-Quran diselesaikan',
    quizzesTitle: 'Kuiz AI Dinilai',
    quizzesDesc: 'Pengesahan Tajwid & Hafazan masa nyata',
    audioTitle: 'Bacan Audio Dimainkan',
    audioDesc: 'Sesi ulangan & mendengarkan bacaan',
    footerCaption: 'Semua statistik dikumpulkan secara tanpa nama dari semua pengguna di seluruh dunia. Tiada data peribadi pengguna yang pernah dikumpulkan.',
    syncActive: 'Segerak Global Langsung Aktif',
  },
};

export default function GlobalUmmahMilestones() {
  const { stats, loading } = useGlobalUmmahStats({ simulateLive: true });
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
            <span className={styles.liveDot} />
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
                <Sparkles size={16} />
                <span>{t.primaryTag}</span>
              </div>
              <div className={styles.primaryCounter}>
                {loading ? (
                  <div className={`${styles.skeleton} `} style={{ width: 280, height: 64 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_verses_memorized}
                    duration={2400}
                    suffix="+"
                  />
                )}
              </div>
              <h3 className={styles.primaryLabel}>{t.primaryTitle}</h3>
              <p className={styles.primaryDesc}>{t.primaryDesc}</p>
            </div>
            <div className={styles.primaryIconContainer}>
              <Globe size={48} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* 4-Column Secondary Grid */}
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
                  <div className={styles.skeleton} style={{ width: 130, height: 38 }} />
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
              <div className={`${styles.iconWrapper} ${styles.iconGold}`}>
                <Award size={24} />
              </div>
              <Activity size={18} color="#D4AF37" style={{ opacity: 0.6 }} />
            </div>
            <div>
              <div className={styles.cardCounter}>
                {loading ? (
                  <div className={styles.skeleton} style={{ width: 110, height: 38 }} />
                ) : (
                  <AnimatedCounter
                    value={stats.total_juz_completed}
                    duration={1800}
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
              <div className={`${styles.iconWrapper} ${styles.iconTeal}`}>
                <Brain size={24} />
              </div>
              <Activity size={18} color="#2DD4BF" style={{ opacity: 0.6 }} />
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

        {/* Footer Guarantee Caption */}
        <div className={styles.footerContainer}>
          <div className={styles.footerNote}>
            <ShieldCheck size={20} className={styles.footerNoteIcon} />
            <span>{t.footerCaption}</span>
          </div>
          <div className={styles.syncStatus}>
            <span className={styles.liveDot} style={{ width: 6, height: 6 }} />
            <span>{t.syncActive}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

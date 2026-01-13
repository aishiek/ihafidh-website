'use client';

import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Languages,
  Layers,
  Mail,
  Music,
  Search,
  Settings,
  Sparkles,
  Star,
  Twitter
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import Testimonials from "./Testimonials";
import RamadanCountdown from "./RamadanCountdown";
import DownloadDrawer from "./DownloadDrawer";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  return (
    <main className={styles.main}>
      {/* Notification Banner */}
      {showBanner && (
        <div className={styles.banner}>
          <div className={`${styles.bannerContent} container`}>
            <Info size={18} />
            <p style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span>Ramadan 2026, Make every day & night count with IHafidh - Memorize, Recite, Reflect</span>
            </p>
            <button className={styles.bannerClose} onClick={() => setShowBanner(false)}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={styles.navbar} style={{ top: showBanner ? '45px' : '0' }}>
        <div className={`${styles.navContainer} container`}>
          <div className={styles.logoArea}>
            <Image
              src="/logo.jpg"
              alt="iHafidh Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span>iHafidh</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.navCountdown}>
              <RamadanCountdown />
            </div>
            <a href="#" onClick={openDrawer} className={styles.ctaButton} style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
              Download Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className={styles.heroContent}>
            <div className={styles.heroInfo}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a href="#whats-new">
                  <span className={`${styles.badge} animate-fade-in`}>New Version 2.0.6 Out Now</span>
                </a>
              </div>
              <h1 className="animate-fade-in">
                Struggling to stay consistent with <span className="gradient-text">Quran memorization?</span>
              </h1>
              <p className="animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '1.35rem', marginBottom: '1.5rem' }}>
                From 0 to 1 Juz in 30 days. Track your progress, build consistency, and achieve your Hifdh goals.
              </p>

              {/* Social Proof Text */}
              <div className="animate-fade-in" style={{ animationDelay: '0.15s', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#fbbf24" strokeWidth={0} />)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>4.8 on App Store</span>
                </div>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Join thousands of Muslims worldwide</span>
              </div>

              <div className={`${styles.downloadButtons} animate-fade-in`} style={{ animationDelay: '0.2s' }} id="download">
                <a href="#" onClick={openDrawer} className={styles.downloadButton}>
                  <Image src="/appstore-badge.png" alt="Get iHafidh on Google Play Store" width={190} height={56} style={{ height: 'auto' }} />
                </a>
                <a href="#" onClick={openDrawer} className={styles.downloadButton}>
                  <Image src="/playstore-badge.png" alt="Download iHafidh on Apple App Store" width={175} height={56} style={{ height: 'auto' }} />
                </a>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>Start Memorizing Today - Free</p>
            </div>
          </div>
          <div className={`${styles.heroImageArea} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.heroGlow}></div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/hero-preview.png"
                alt="iHafidh App Main Dashboard Preview"
                width={350}
                height={700}
                className="animate-float"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">How It Works</h2>
            <p>Four simple steps to start your Quran journey today.</p>
          </div>

          <div className={styles.stepGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Download & Setup</h3>
              <p>Install iHafidh from your app store and choose your preferred Mushaf style and translation.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Set Your Goals</h3>
              <p>Define which Surahs or Juz you want to memorize and set a daily recitation target.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Track Daily</h3>
              <p>Mark verses as revised or memorized. Watch your progress rings fill up in real-time.</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Analyze & Improve</h3>
              <p>Use detailed statistics to identify patterns and stay consistent using spaced repetition.</p>
            </div>
          </div>

          <div className={styles.primaryCtaContainer}>
            <a href="#" onClick={openDrawer} className={styles.ctaButton}>
              Start Memorizing Today - Free <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">Powerful Features for Every Hafidh</h2>
            <p>Everything you need to stay consistent and achieve your memorization goals.</p>
          </div>

          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Settings size={32} /></div>
              <h3>Custom Page Mode</h3>
              <p>Customize reading from 3 to 20 Ayahs. Create and track your own pages with page-level audio repetition for easier memorization.</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Layers size={32} /></div>
              <h3>Comprehensive Tracking</h3>
              <p>Monitor your journey across all 114 Surahs and 30 Juz with visual progress indicators.</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><BarChart3 size={32} /></div>
              <h3>Advanced Analytics</h3>
              <p>Detailed memorization statistics and performance metrics to visualize your daily efforts.</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Clock size={32} /></div>
              <h3>Spaced Repetition</h3>
              <p>Smart review system designed for optimal retention and long-term memorization.</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Music size={32} /></div>
              <h3>Audio Recitations</h3>
              <p>High-quality verse-by-verse practice with customizable audio controls.</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><CheckCircle2 size={32} /></div>
              <h3>Study Plans</h3>
              <p>Create customizable study plans and receive smart reminders to keep you on track.</p>
            </div>

          </div>

          <div className={styles.primaryCtaContainer}>
            <a href="#" onClick={openDrawer} className={styles.ctaButton}>
              Start Memorizing Today - Free <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsSection}>
            <div className={styles.statsImage}>
              <Image
                src="/stats-preview.png"
                alt="iHafidh Detailed Statistics Analytics Dashboard"
                width={600}
                height={400}
                className="glass"
                style={{ borderRadius: '24px' }}
              />
            </div>
            <div className={styles.statsContent}>
              <h2 className="gradient-text">Visualize Your Success</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                They say what gets measured gets managed. iHafidh provides deep insights into your progress,
                helping you identify patterns and stay motivated.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> Daily & Weekly activity heatmaps
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> Surah-wise completion metrics
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> Achievement badges and milestones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Recitation Section */}
      <section className={styles.dailySection} id="daily-recitation">
        <div className="container">
          <div className={styles.statsSection} style={{ flexDirection: 'row-reverse' }}>
            <div className={styles.statsContent}>
              <div className={styles.badge}>For Daily Readers</div>
              <h2 className="gradient-text">Beyond Memorization</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Whether you're aiming for Hifdh or just want a meaningful daily recitation,
                iHafidh provides a premium reading experience for every Muslim.
              </p>

              <div className={styles.readerFeatures}>
                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Sparkles size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>Daily Ayah Notifications</h4>
                    <p>Start your morning with a beautiful verse and reflection delivered to your device.</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Languages size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>Multi-Language Tarjuma</h4>
                    <p>Access high-quality translations in English, Urdu, Tamil, French, and many more.</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Search size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>Scholarly Tafsirs</h4>
                    <p>Deepen your understanding with multi-language tafsirs directly in the reader.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.heroImageArea} style={{ flex: 1 }}>
              <div className={styles.heroGlow}></div>
              <Image
                src="/daily-preview.png"
                alt="iHafidh Daily Ayah and Multi-language Translation Interface"
                width={350}
                height={700}
                className="glass animate-float"
                style={{ borderRadius: '40px', objectFit: 'cover', zIndex: 2, position: 'relative' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">Frequently Asked Questions</h2>
            <p>Everything you need to know about the iHafidh app.</p>
          </div>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Is iHafidh free to use?</h4>
              <p>Yes, the core features of iHafidh, including progress tracking and Quran recitation, are completely free to use with no hidden charges.</p>
            </div>

            <div className={styles.faqItem}>
              <h4>Does it work offline?</h4>
              <p>Most features work perfectly offline. Your progress is saved locally. Audio recitations can be downloaded to work without an internet connection.</p>
            </div>

            <div className={styles.faqItem}>
              <h4>What Quran translations are available?</h4>
              <p>We offer a wide range of translations in various languages including English (Asad, Pickthall, Sahih), Urdu, Tamil, French, Hindi, and more.</p>
            </div>

            <div className={styles.faqItem}>
              <h4>Can I track both Surah and Juz progress?</h4>
              <p>Absolutely. iHafidh allows you to track your progress at both the Surah level (all 114) and Juz level (all 30) simultaneously.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.changelog} id="whats-new">
        <div className="container glass" style={{ padding: '4rem 2rem' }}>
          <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>Latest Updates (v2.0.6)</h2>
          <div className={styles.featureGrid}>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Music size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>Mushaf Audio Repeat</h4>
                <p>Repeat audio by Verse or Page level for effective Hifdh repetition.</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Languages size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>Tajweed Fonts</h4>
                <p>New color-coded Tajweed fonts in settings to perfect your pronunciation.</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Settings size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>Preview Reciter</h4>
                <p>Listen to audio samples when selecting your preferred Qari in settings.</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Layers size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>Custom Page Mode</h4>
                <p>Customize your reading experience from 3 up to 20 verses per page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container glass" style={{ padding: '6rem 2rem' }}>
          <h2>Start Your Hifdh Journey Now</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
            Join thousands of Muslims worldwide who are using iHafidh to master the Noble Quran.
          </p>
          <div className={styles.downloadButtons} style={{ justifyContent: 'center' }}>
            <a href="#" onClick={openDrawer} className={styles.downloadButton}>
              <Image src="/appstore-badge.png" alt="Get iHafidh on Google Play Store" width={175} height={48} style={{ height: 'auto' }} />
            </a>
            <a href="#" onClick={openDrawer} className={styles.downloadButton}>
              <Image src="/playstore-badge.png" alt="Download iHafidh on Apple App Store" width={160} height={48} style={{ height: 'auto' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLogo}>
            <Image
              src="/logo.jpg"
              alt="iHafidh Logo"
              width={60}
              height={60}
              style={{
                borderRadius: '12px',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
              }}
            />
            <span style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #fff, #a7f3d0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>iHafidh</span>
          </div>

          <p>
            © {new Date().getFullYear()} iHafidh. Built with heart for the Ummah.
            <br />
            <a href="mailto:iHafidhapp@gmail.com" className="gradient-text" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <Mail size={16} /> iHafidhapp@gmail.com
            </a>
          </p>

          <div className={styles.socialIcons}>
            <Link href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter /></Link>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="mailto:iHafidhapp@gmail.com">Support</Link>
          </div>
        </div>
      </footer>
      <DownloadDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </main>
  );
}


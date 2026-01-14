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
import LanguageSelector from "./LanguageSelector";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

function HomeContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useLanguage();

  const openDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={styles.navbar}>
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
          <div className={styles.navRight}>
            <LanguageSelector />
            <div className={styles.navActions}>
              <a href="#" onClick={openDrawer} className={styles.ctaButton}>
                {t('downloadNow')}
              </a>
              <div className={styles.navCountdown}>
                <RamadanCountdown />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className={styles.heroContent}>
            <div className={styles.heroInfo}>
              <p className="animate-fade-in" style={{
                color: '#D4AF37',
                fontSize: '1.1rem',
                fontWeight: 500,
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {t('ramadanText')}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a href="#whats-new">
                  <span className={`${styles.badge} animate-fade-in`}>{t('versionBadge')}</span>
                </a>
              </div>
              <h1 className="animate-fade-in">
                {t('heroHeadline')} <span className="gradient-text">{t('heroHeadlineHighlight')}</span>
              </h1>
              <p className="animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '1.35rem', marginBottom: '1.5rem' }}>
                {t('heroSubheadline')}
              </p>

              {/* Social Proof Text */}
              <div className="animate-fade-in" style={{ animationDelay: '0.15s', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#fbbf24" strokeWidth={0} />)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t('appStoreRating')}</span>
                </div>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{t('joinCommunity')}</span>
              </div>

              <div className={`${styles.downloadButtons} animate-fade-in`} style={{ animationDelay: '0.2s' }} id="download">
                <a href="#" onClick={openDrawer} className={styles.downloadButton}>
                  <Image src="/appstore-badge.png" alt="Get iHafidh on Google Play Store" width={190} height={56} style={{ height: 'auto' }} />
                </a>
                <a href="#" onClick={openDrawer} className={styles.downloadButton}>
                  <Image src="/playstore-badge.png" alt="Download iHafidh on Apple App Store" width={175} height={56} style={{ height: 'auto' }} />
                </a>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>{t('ctaFree')}</p>
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
            <h2 className="gradient-text">{t('howItWorksTitle')}</h2>
            <p>{t('howItWorksSubtitle')}</p>
          </div>

          <div className={styles.stepGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>{t('step1Title')}</h3>
              <p>{t('step1Desc')}</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>{t('step2Title')}</h3>
              <p>{t('step2Desc')}</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>{t('step3Title')}</h3>
              <p>{t('step3Desc')}</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>{t('step4Title')}</h3>
              <p>{t('step4Desc')}</p>
            </div>
          </div>

          <div className={styles.primaryCtaContainer}>
            <a href="#" onClick={openDrawer} className={styles.ctaButton}>
              {t('ctaFree')} <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">{t('featuresTitle')}</h2>
            <p>{t('featuresSubtitle')}</p>
          </div>

          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Settings size={32} /></div>
              <h3>{t('feature1Title')}</h3>
              <p>{t('feature1Desc')}</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Layers size={32} /></div>
              <h3>{t('feature2Title')}</h3>
              <p>{t('feature2Desc')}</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><BarChart3 size={32} /></div>
              <h3>{t('feature3Title')}</h3>
              <p>{t('feature3Desc')}</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Clock size={32} /></div>
              <h3>{t('feature4Title')}</h3>
              <p>{t('feature4Desc')}</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Music size={32} /></div>
              <h3>{t('feature5Title')}</h3>
              <p>{t('feature5Desc')}</p>
            </div>

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><CheckCircle2 size={32} /></div>
              <h3>{t('feature6Title')}</h3>
              <p>{t('feature6Desc')}</p>
            </div>

          </div>

          <div className={styles.primaryCtaContainer}>
            <a href="#" onClick={openDrawer} className={styles.ctaButton}>
              {t('ctaFree')} <ChevronRight size={20} />
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
              <h2 className="gradient-text">{t('statsTitle')}</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                {t('statsDesc')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> {t('statsList1')}
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> {t('statsList2')}
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="var(--primary)" /> {t('statsList3')}
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
              <div className={styles.badge}>{t('dailyBadge')}</div>
              <h2 className="gradient-text">{t('dailyTitle')}</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                {t('dailyDesc')}
              </p>

              <div className={styles.readerFeatures}>
                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Sparkles size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature1Title')}</h4>
                    <p>{t('dailyFeature1Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Languages size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature2Title')}</h4>
                    <p>{t('dailyFeature2Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon}><Search size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature3Title')}</h4>
                    <p>{t('dailyFeature3Desc')}</p>
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
            <h2 className="gradient-text">{t('faqTitle')}</h2>
            <p>{t('faqSubtitle')}</p>
          </div>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>{t('faq1Q')}</h4>
              <p>{t('faq1A')}</p>
            </div>

            <div className={styles.faqItem}>
              <h4>{t('faq2Q')}</h4>
              <p>{t('faq2A')}</p>
            </div>

            <div className={styles.faqItem}>
              <h4>{t('faq3Q')}</h4>
              <p>{t('faq3A')}</p>
            </div>

            <div className={styles.faqItem}>
              <h4>{t('faq4Q')}</h4>
              <p>{t('faq4A')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.changelog} id="whats-new">
        <div className="container glass" style={{ padding: '4rem 2rem' }}>
          <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('updatesTitle')}</h2>
          <div className={styles.featureGrid}>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Music size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update1Title')}</h4>
                <p>{t('update1Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Languages size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update2Title')}</h4>
                <p>{t('update2Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Settings size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update3Title')}</h4>
                <p>{t('update3Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Layers size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update4Title')}</h4>
                <p>{t('update4Desc')}</p>
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
          <h2>{t('ctaTitle')}</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
            {t('ctaDesc')}
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
            © {new Date().getFullYear()} iHafidh. {t('footerCopyright')}
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

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

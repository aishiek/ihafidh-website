'use client';

import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  CaseSensitive,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Eye,
  Facebook,
  Globe,
  HandHeart,
  Hash,
  Heart,
  Instagram,
  Languages,
  Layers,
  Layout,
  List,
  Mail,
  Maximize,
  Moon,
  Music,
  RotateCw,
  Scissors,
  Search,
  Settings,
  Settings2,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Target,
  ToggleLeft,
  Twitter,
  Type,
  WifiOff
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import Testimonials from "./Testimonials";
import DownloadDrawer from "./DownloadDrawer";
import LanguageSelector from "./LanguageSelector";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

function FeaturesExplorer({ openDrawer }: { openDrawer: (e: React.MouseEvent) => void }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'Recitation' | 'Memorization' | 'Experience' | 'Growth'>('Recitation');

  const categories = [
    { id: 'Recitation' as const, label: t('categoryRecitation'), icon: <BookOpen size={20} /> },
    { id: 'Memorization' as const, label: t('categoryHifdh'), icon: <Brain size={20} /> },
    { id: 'Experience' as const, label: t('categoryUI'), icon: <Layout size={20} /> },
    { id: 'Growth' as const, label: t('categoryGrowth'), icon: <Activity size={20} /> },
  ];

  const features = {
    Recitation: [
      { id: 'f1', icon: <Moon size={24} /> },
      { id: 'f2', icon: <Sun size={24} /> },
      { id: 'f3', icon: <RotateCw size={24} /> },
      { id: 'f4', icon: <Type size={24} /> },
      { id: 'f5', icon: <Languages size={24} /> },
      { id: 'f6', icon: <Layers size={24} /> },
      { id: 'f7', icon: <List size={24} /> },
      { id: 'f8', icon: <Hash size={24} /> },
    ],
    Memorization: [
      { id: 'f9', icon: <Eye size={24} /> },
      { id: 'f10', icon: <Brain size={24} /> },
      { id: 'f11', icon: <HandHeart size={24} /> },
      { id: 'f12', icon: <Heart size={24} /> },
      { id: 'f13', icon: <Activity size={24} /> },
      { id: 'f14', icon: <Scissors size={24} /> },
      { id: 'f15', icon: <Settings2 size={24} /> },
      { id: 'f16', icon: <ToggleLeft size={24} /> },
    ],
    Experience: [
      { id: 'f17', icon: <Maximize size={24} /> },
      { id: 'f18', icon: <CaseSensitive size={24} /> },
      { id: 'f19', icon: <CreditCard size={24} /> },
      { id: 'f20', icon: <WifiOff size={24} /> },
      { id: 'f21', icon: <Smartphone size={24} /> },
      { id: 'f22', icon: <Sparkles size={24} /> },
    ],
    Growth: [
      { id: 'f23', icon: <BarChart3 size={24} /> },
      { id: 'f24', icon: <Globe size={24} /> },
    ],
  };

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.goldGradientText}>{t('featuresTitle')}</h2>
          <p>{t('featuresSubtitle')}</p>
        </div>

        <div className={styles.featureTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabButton} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.fGrid}>
          {features[activeCategory].map((f) => (
            <div key={f.id} className={`${styles.fCard} glass animate-fade-in`}>
              <div className={styles.fIcon}>{f.icon}</div>
              <h4>{t(`${f.id}Title` as any)}</h4>
              <p>{t(`${f.id}Desc` as any)}</p>
            </div>
          ))}
        </div>

        <div className={styles.primaryCtaContainer}>
          <a href="#" onClick={openDrawer} className={styles.ctaButton}>
            {t('ctaFree')} <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t, language } = useLanguage();

  const openDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  return (
    <main className={styles.main} dir={language === 'ur' ? 'rtl' : 'ltr'} data-lang={language}>
      {/* Launch Banner */}
      <div className={styles.launchBanner}>
        🎉 <strong>{t('bannerText')}</strong> <a href="#download">{t('bannerCTA')}</a>
      </div>
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section — AI Quiz Focus */}
      <section className={styles.hero}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <div className={styles.heroInfo}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div className={styles.badge} style={{ background: 'rgba(45,212,191,0.12)', color: '#2DD4BF', borderColor: 'rgba(45,212,191,0.35)' }}>
                  🎙️ {t('aiSectionBadge')}
                </div>
                <span className={`${styles.featuresBadge} animate-fade-in`}>{t('versionBadge')}</span>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', color: '#fff', lineHeight: 1.15 }}>
                  <span style={{ background: 'linear-gradient(135deg, #2DD4BF 0%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>{t('aiSectionTitle')}</span>
                </h1>
              </div>
              <p className="animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '1.25rem', marginBottom: '0.5rem', color: '#94a3b8' }}>
                {t('aiSectionDesc')}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.11s', fontSize: '1rem', marginBottom: '1.75rem', fontWeight: 600 }}>
                <span style={{ color: '#2DD4BF' }}>Recite in AI</span>
                <span style={{ color: '#64748b' }}> — {t('aiHeroTagline').replace('Recite in AI — ', '').replace('AI-உடன் ஓதுங்கள் — ', '').replace('Baca dengan AI — ', '').replace('AI کے ساتھ تلاوت کریں — ', '')}</span>
              </p>

              {/* Trust Bar */}
              <div className={`${styles.trustBar} animate-fade-in`} style={{ animationDelay: '0.15s' }}>
                <span><Star size={16} fill="#fbbf24" strokeWidth={0} /> {t('appStoreRating')}</span>
                <span className={styles.trustDivider}>•</span>
                <span>{t('trustUsedBy')}</span>
                <span className={styles.trustDivider}>•</span>
                <span>{t('trustFree')}</span>
              </div>

              <div className={`${styles.downloadButtons} animate-fade-in`} style={{ animationDelay: '0.2s' }} id="download">
                <a href="https://apps.apple.com/sg/app/ihafidh/id6752505055" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                  <Image src="/playstore-badge.png" alt="Download iHafidh on the Apple App Store" width={175} height={56} style={{ height: 'auto' }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ihafidh" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                  <Image src="/appstore-badge.png" alt="Get iHafidh on Google Play Store" width={190} height={56} style={{ height: 'auto' }} />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.heroImageArea} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.heroGlow} style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.35) 0%, transparent 70%)' }}></div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/ai-quiz-scorecard.png"
                alt="iHafidh AI Intelligent Quiz Scorecard"
                width={380}
                height={760}
                className="animate-float"
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto', borderRadius: '24px', border: '2px solid rgba(45,212,191,0.35)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.goldGradientText}>{t('howItWorksTitle')}</h2>
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

      <FeaturesExplorer openDrawer={openDrawer} />

      {/* Teal AI Tagline Anchor */}
      <div style={{ textAlign: 'center', padding: '2rem 0 0', letterSpacing: '0.15em', fontSize: '1.1rem', fontWeight: 700, color: '#2DD4BF', textShadow: '0 0 30px rgba(45,212,191,0.5)' }}>
        ✦&nbsp; Recite in AI &nbsp;✦
      </div>

      {/* AI Scorecard Feature Detail */}
      <section className={styles.dailySection} id="ai-quiz">
        <div className="container">
          <div className={styles.statsSection} style={{ flexDirection: 'row' }}>
            <div className={styles.statsContent}>
              <div className={styles.badge} style={{ background: 'rgba(45, 212, 191, 0.12)', color: '#2DD4BF', borderColor: 'rgba(45, 212, 191, 0.35)' }}>{t('aiSectionBadge')}</div>
              <h2 style={{ background: 'linear-gradient(to right, #2DD4BF, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem' }}>{t('aiSectionTitle')}</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                {t('aiSectionDesc')}
              </p>

              <div className={styles.readerFeatures}>
                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(45, 212, 191, 0.12)', color: '#2DD4BF' }}><Brain size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('aiFeature1Title')}</h4>
                    <p>{t('aiFeature1Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(45, 212, 191, 0.12)', color: '#2DD4BF' }}><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('aiFeature2Title')}</h4>
                    <p>{t('aiFeature2Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(45, 212, 191, 0.12)', color: '#2DD4BF' }}><RotateCw size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('aiFeature3Title')}</h4>
                    <p>{t('aiFeature3Desc')}</p>
                  </div>
                </div>
              </div>

              <p className="animate-fade-in" style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic', marginTop: '1.5rem' }}>
                {t('aiDisclaimer')}
              </p>
            </div>

            <div className={styles.heroImageArea} style={{ flex: 1 }}>
              <div className={styles.heroGlow} style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)' }}></div>
              <div className={styles.landscapeImageWrapper}>
                <Image
                  src="/ai-quiz-scorecard.png"
                  alt="iHafidh AI Intelligent Quiz Scorecard"
                  width={700}
                  height={700}
                  className="glass animate-float"
                  style={{ borderRadius: '24px', objectFit: 'cover', zIndex: 2, position: 'relative', maxWidth: '100%', height: 'auto', border: '2px solid rgba(45, 212, 191, 0.4)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Read Mode Section */}
      <section className={styles.dailySection} id="golden-mode">
        <div className="container">
          <div className={styles.statsSection} style={{ flexDirection: 'row-reverse' }}>
            <div className={styles.statsContent}>
              <div className={styles.badge} style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37', borderColor: 'rgba(212,175,55,0.3)' }}>{t('heroHeadline').replace('.', '')}</div>
              <h2 style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #D4AF37 50%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem' }}>
                {t('heroHeadline')} {t('heroHeadlineHighlight')}
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                {t('heroSubheadline')}
              </p>

              <div className={styles.readerFeatures}>
                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}><Sparkles size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature1Title')}</h4>
                    <p>{t('dailyFeature1Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}><Languages size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature2Title')}</h4>
                    <p>{t('dailyFeature2Desc')}</p>
                  </div>
                </div>

                <div className={styles.readerFeatureItem}>
                  <div className={styles.readerFeatureIcon} style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}><Search size={20} /></div>
                  <div>
                    <h4 style={{ color: '#fff' }}>{t('dailyFeature3Title')}</h4>
                    <p>{t('dailyFeature3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.heroImageArea} style={{ flex: 1 }}>
              <div className={styles.heroGlow} style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }}></div>
              <div className={styles.landscapeImageWrapper} style={{ border: '1px solid rgba(212,175,55,0.3)' }}>
                <Image
                  src="/daily-preview.png"
                  alt="iHafidh Golden Quran Mode Landscape"
                  width={700}
                  height={350}
                  className="glass animate-float"
                  style={{ borderRadius: '24px', objectFit: 'cover', zIndex: 2, position: 'relative', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
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
                style={{ borderRadius: '24px', maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.statsContent}>
              <h2 className={styles.goldGradientText}>{t('statsTitle')}</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                {t('statsDesc')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="#2DD4BF" /> {t('statsList1')}
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="#2DD4BF" /> {t('statsList2')}
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', color: '#fff' }}>
                  <CheckCircle2 color="#2DD4BF" /> {t('statsList3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.goldGradientText}>{t('faqTitle')}</h2>
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

            <div className={styles.faqItem}>
              <h4>{t('faq5Q')}</h4>
              <p>{t('faq5A')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.changelog} id="whats-new">
        <div className="container glass" style={{ padding: '4rem 2rem' }}>
          <h2 className={styles.goldGradientText} style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('updatesTitle')}</h2>
          <div className={styles.featureGrid}>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Brain size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update1Title')}</h4>
                <p>{t('update1Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><CheckCircle2 size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update2Title')}</h4>
                <p>{t('update2Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Languages size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update3Title')}</h4>
                <p>{t('update3Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Settings2 size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update4Title')}</h4>
                <p>{t('update4Desc')}</p>
              </div>
            </div>
            <div className={styles.readerFeatureItem}>
              <div className={styles.readerFeatureIcon}><Layers size={20} /></div>
              <div>
                <h4 style={{ color: '#fff' }}>{t('update5Title')}</h4>
                <p>{t('update5Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

          <div className={styles.primaryCtaContainer}>
            <a href="#" onClick={openDrawer} className={styles.ctaButton} style={{ background: '#D4AF37' }}>
              {t('ctaTailoredTestimonials')} <ChevronRight size={20} />
            </a>
          </div>
          {/* CTA Section */}
          <section className={styles.cta}>
            <div className="container glass" style={{ padding: '6rem 2rem' }}>
              <h2>{t('ctaTitle')}</h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
                {t('ctaDesc')}
              </p>
              <div className={styles.downloadButtons} style={{ justifyContent: 'center' }}>
                <a href="https://apps.apple.com/sg/app/ihafidh/id6752505055" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                  <Image src="/playstore-badge.png" alt="Download iHafidh on the Apple App Store" width={175} height={48} style={{ height: 'auto' }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ihafidh" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                  <Image src="/appstore-badge.png" alt="Get iHafidh on Google Play Store" width={160} height={48} style={{ height: 'auto' }} />
                </a>
              </div>
              <p style={{ marginTop: '2rem', fontWeight: 600 }}>{t('ctaTailoredFooter')}</p>
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
            <a href="mailto:iHafidhapp@gmail.com" className={styles.goldGradientText} style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <Mail size={16} /> iHafidhapp@gmail.com
            </a>
          </p>

          <div className={styles.socialIcons}>
            <Link href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter /></Link>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/privacy">{t('privacyPolicy')}</Link>
            <Link href="mailto:iHafidhapp@gmail.com">{t('support')}</Link>
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

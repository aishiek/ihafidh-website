import {
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
  Music,
  Settings
} from "lucide-react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={`${styles.navContainer} container`}>
          <div className={styles.logoArea}>
            <Image
              src="/logo.png"
              alt="iHafidh Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span>iHafidh</span>
          </div>
          <a href="#download" className="glass" style={{ padding: '0.5rem 1.25rem', fontWeight: 600 }}>
            Download Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className={styles.heroContent}>
            <div className={styles.heroInfo}>
              <span className={`${styles.badge} animate - fade -in `}>New Version 2.0 Out Now</span>
              <h1 className="animate-fade-in">Master Your Quran <span className="gradient-text">Memorization</span> Journey</h1>
              <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Your comprehensive digital companion for Hifdh with detailed statistics,
                visual progress tracking, and spaced repetition techniques.
              </p>

              <div className={`${styles.downloadButtons} animate - fade -in `} style={{ animationDelay: '0.2s' }} id="download">
                <a href="#" className={styles.downloadButton}>
                  <Image src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on App Store" width={160} height={53} />
                </a>
                <a href="#" className={styles.downloadButton}>
                  <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={200} height={78} style={{ marginTop: '-12px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.heroImageArea} animate - fade -in `} style={{ animationDelay: '0.3s' }}>
            <div className={styles.heroGlow}></div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/hero-preview.png"
                alt="iHafidh App Screenshot"
                width={350}
                height={700}
                className="animate-float"
                style={{ objectFit: 'contain' }}
              />
            </div>
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

            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}><Settings size={32} /></div>
              <h3>Fully Customizable</h3>
              <p>Multiple Mushaf layouts including Hafs and Indopak to suit your preference.</p>
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
                alt="Statistics Dashboard"
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

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container glass" style={{ padding: '6rem 2rem' }}>
          <h2>Start Your Journey Today</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
            Join thousands of Muslims worldwide who are using iHafidh to master the Noble Quran.
          </p>
          <div className={styles.downloadButtons} style={{ justifyContent: 'center' }}>
            <a href="#" className={styles.downloadButton}>
              <Image src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on App Store" width={160} height={53} />
            </a>
            <a href="#" className={styles.downloadButton}>
              <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={200} height={78} style={{ marginTop: '-12px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="iHafidh Logo" width={32} height={32} style={{ borderRadius: '8px' }} />
            <span>iHafidh</span>
          </div>
          <p>© {new Date().getFullYear()} iHafidh. Built with heart for the Ummah.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '0.875rem' }}>
            <a href="https://aishiek.github.io/" style={{ color: '#64748b' }}>Privacy Policy</a>
            <a href="https://aishiek.github.io/" style={{ color: '#64748b' }}>Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

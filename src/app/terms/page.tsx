import Link from "next/link";
import styles from "../page.module.css";

export default function TermsOfService() {
    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <div className="container" style={{ padding: '8rem 2rem' }}>
                <Link href="/" className={styles.goldGradientText} style={{ fontWeight: 600, marginBottom: '2rem', display: 'inline-block' }}>
                    ← Back to Home
                </Link>
                <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>

                <div style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Effective Date: October 27, 2026 • Last Updated: November 2026</p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Welcome to iHafidh (&quot;we&quot;, &quot;our&quot;, or &quot;the Service&quot;), accessible via our mobile application, web companions, and AI MCP connectors. By using iHafidh, you agree to these Terms of Service and our <Link href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Permitted Use</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        iHafidh is dedicated to assisting Muslims in reading, memorizing (Hifdh), and reciting the Holy Quran. You agree to use the Service solely for respectful, lawful, and spiritual purposes. You may not use group titles or communal Khatam features to post unlawful, offensive, or inappropriate content.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Group Khatams & AI Connectors</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Our collaborative 30-Juz Group Khatam service and Model Context Protocol (MCP) AI connectors allow users to organize communal Quran readings. Group links are publicly shareable for family and community convenience without requiring an app download.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Quranic Text Accuracy</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        While we take meticulous care to preserve the accuracy of Arabic Uthmani text and recitations, users are encouraged to verify their memorization with qualified Quran teachers (Asatizah). AI speech evaluation aids do not replace formal Tajweed certification.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. iHafidh and its developers shall not be liable for any indirect or consequential damages arising from the use of the Service.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Contact Us</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        If you have any questions about these Terms, please contact us at
                        <a href="mailto:iHafidhapp@gmail.com" style={{ color: 'var(--primary)', marginLeft: '0.5rem' }}>iHafidhapp@gmail.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}

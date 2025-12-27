import Link from "next/link";
import styles from "../page.module.css";

export default function PrivacyPolicy() {
    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <div className="container" style={{ padding: '8rem 2rem' }}>
                <Link href="/" className="gradient-text" style={{ fontWeight: 600, marginBottom: '2rem', display: 'inline-block' }}>
                    ← Back to Home
                </Link>
                <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>

                <div style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last Updated: December 27, 2025</p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Welcome to iHafidh. We are committed to protecting your personal information and your right to privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Local Data:</strong> Most of your progress data, including surah memorization status and Juz progress,
                        is stored locally on your device.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Analytics:</strong> We may collect anonymous usage data to improve app performance and user experience.
                        This does not include personally identifiable information.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>To provide and maintain our Service.</li>
                        <li>To notify you about changes to our Service.</li>
                        <li>To provide customer support.</li>
                        <li>To gather analysis or valuable information so that we can improve our Service.</li>
                    </ul>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Security</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The security of your data is important to us, but remember that no method of transmission over the Internet
                        is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data,
                        we cannot guarantee its absolute security.
                    </p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        If you have any questions about this Privacy Policy, please contact us at
                        <a href="mailto:iHafidhapp@gmail.com" style={{ color: 'var(--primary)', marginLeft: '0.5rem' }}>iHafidhapp@gmail.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}

import Link from "next/link";
import styles from "../page.module.css";

export default function McpDocs() {
    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <div className="container" style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                <Link href="/" className={styles.goldGradientText} style={{ fontWeight: 600, marginBottom: '2rem', display: 'inline-block' }}>
                    ← Back to Home
                </Link>
                <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(16, 185, 129, 0.15)', padding: '4px 10px', borderRadius: '999px' }}>
                        Model Context Protocol (MCP) Spec
                    </span>
                </div>
                <h1 style={{ marginBottom: '1rem' }}>iHafidh MCP Connector Documentation</h1>
                <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
                    Protocol Version: <code>2024-11-05</code> • Server Version: <code>1.0.3</code> • Transport: Streamable HTTP JSON-RPC 2.0
                </p>

                <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Overview & Service Architecture</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The <strong>iHafidh MCP Connector</strong> enables Meta Muse, Meta AI, and intelligent agents to create collaborative 30-Juz Quran Khatams, inspect real-time recitation progress, and query open slots.
                    </p>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li><strong>Base MCP Endpoint:</strong> <code>https://ihafidh-mcp-111396060222.asia-southeast1.run.app/mcp</code></li>
                        <li><strong>Region:</strong> Google Cloud Run in Singapore (<code>asia-southeast1</code>).</li>
                        <li><strong>Authentication:</strong> None required (Free public community service).</li>
                        <li><strong>Interactive Web App:</strong> Generates responsive web companion links (<code>/c/[code]</code>) requiring no app downloads for participants.</li>
                    </ul>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Endpoints</h2>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li><code>POST /mcp</code>: Streamable JSON-RPC 2.0 tool execution endpoint.</li>
                        <li><code>GET /health</code>: Uptime & health probe (returns 200 OK).</li>
                        <li><code>GET /tools</code>: Standard tool discovery schema.</li>
                        <li><code>GET /prompts</code>: Assistant prompt templates.</li>
                    </ul>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Tools Reference</h2>
                    
                    <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>• create_group_khatam (Write)</h3>
                    <p style={{ marginBottom: '1rem' }}>Creates a 30-slot collaborative Quran Khatam circle. Returns web link and WhatsApp invite message.</p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li><code>name</code> (string, required): Circle dedication or title (max 100 chars).</li>
                        <li><code>targetDate</code> (string, optional): Target completion date (YYYY-MM-DD or &quot;+7d&quot;, &quot;+14d&quot;).</li>
                        <li><code>intention</code> (string, optional): Spiritual du&apos;a (max 500 chars).</li>
                        <li><code>isEesaleSawab</code> (boolean, optional): Dedicated to deceased loved ones.</li>
                        <li><code>hostName</code> (string, optional): Organizer name (defaults to &quot;Host&quot;).</li>
                        <li><code>hostJuz</code> (integer[], optional): List of Juz (1-30) claimed by organizer.</li>
                    </ul>

                    <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>• check_khatam_progress (Read)</h3>
                    <p style={{ marginBottom: '1rem' }}>Fetches live recitation stats (completed, in-progress, assigned, and open Juz) by invite code.</p>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li><code>inviteCode</code> (string, required): 4-12 character circle code.</li>
                    </ul>

                    <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>• get_open_juz (Read)</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Lists all unclaimed Juz slots with Surah names and Ayah boundaries.</p>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Example User Prompts</h2>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li><em>&quot;Create a collaborative 30-Juz Quran Khatam in memory of my late grandfather Haji Haja Mohideen completing in 14 days.&quot;</em></li>
                        <li><em>&quot;Help me organize a 30-Juz Group Khatam for our Ramadan family circle. I&apos;ll take Juz 1 and 30.&quot;</em></li>
                        <li><em>&quot;Check the recitation progress of our Group Khatam with code BGEEJ9.&quot;</em></li>
                    </ul>

                    <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Compliance & Security</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        No sensitive personal data or religious profiling data is processed. User-provided names are used solely to populate public recitation slots. View our <Link href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link> and <Link href="/terms" style={{ color: 'var(--primary)' }}>Terms of Service</Link>.
                    </p>
                </div>
            </div>
        </main>
    );
}

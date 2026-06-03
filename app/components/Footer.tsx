import Link from 'next/link'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/philosophy', label: 'Philosophy' },
    { href: '#news', label: 'Market News' },
    { href: '#alerts', label: 'Risk Guidelines' },
    { href: '#course', label: 'Register Course' },
]

const communityLinks = [
    {
        href: 'https://instagram.com/tradeguru_sagarpatil',
        label: 'Instagram Feed',
        external: true,
    },
    {
        href: 'https://youtube.com/@tradeguru_sagarpatil',
        label: 'YouTube Channel',
        external: true,
    },
    { href: '#course', label: 'Free Orientation', external: false },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{ background: 'var(--bg-dark-section)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '80px 32px 48px' }}>
            <div className="footer-inner" style={{ maxWidth: '1180px', margin: '0 auto' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '64px' }}>
                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div className="logo-bull" style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M30,50 C30,30 40,20 50,20" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                                    <path d="M70,50 C70,30 60,20 50,20" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                                    <path d="M30,60 C30,75 40,80 50,80" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                                    <path d="M70,60 C70,75 60,80 50,80" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                                    <path d="M26,38 L32,42 M24,28 L32,34 M34,20 L40,28" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M74,38 L68,42 M76,28 L68,34 M66,20 L60,28" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M42,50 L48,46 L58,49 L64,43" stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M38,62 L50,44 L62,56 L72,36 M72,36 L62,36 M72,36 L72,46" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <span className="logo-name" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px', lineHeight: 1.1, display: 'block' }}>
                                    Trade Guru
                                </span>
                                <span className="logo-sub" style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '1.2px', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>
                                    Trainings Academy
                                </span>
                            </div>
                        </div>
                        <p className="f-tagline" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '15px', color: 'rgba(255, 255, 255, 0.45)', margin: '0 0 24px 0', lineHeight: '1.5' }}>
                            &ldquo;Discipline Today,
                            <br />
                            Freedom Tomorrow&rdquo;
                        </p>
                        <div className="f-socials" style={{ display: 'flex', gap: '10px' }}>
                            <a
                                href="https://instagram.com/tradeguru_sagarpatil"
                                className="f-social"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                IG
                            </a>
                            <a
                                href="https://youtube.com/@tradeguru_sagarpatil"
                                className="f-social"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                YT
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links Column */}
                    <div className="f-col">
                        <h5 style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600, marginBottom: '22px' }}>
                            Academy
                        </h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.55)', fontSize: '13.5px', transition: 'color 0.2s' }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Links Column */}
                    <div className="f-col">
                        <h5 style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600, marginBottom: '22px' }}>
                            Resources
                        </h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                            {communityLinks.map((link) => (
                                <li key={link.label}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.55)', fontSize: '13.5px', transition: 'color 0.2s' }}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <a href={link.href} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.55)', fontSize: '13.5px', transition: 'color 0.2s' }}>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Disclaimer and Copyright */}
                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
                    <p className="disclaimer" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.28)', lineHeight: '1.75', maxWidth: '680px', margin: 0, fontWeight: 300 }}>
                        <strong>Risk Warning:</strong> Trading in financial markets involves high leverage and significant risk of capital loss. The educational materials provided here are for training purposes only and should not be construed as investment advice.
                    </p>
                    <span className="copyright" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.28)', whiteSpace: 'nowrap' }}>
                        © {year} Trade Guru ITA · Pune, India
                    </span>
                </div>
            </div>
        </footer>
    )
}
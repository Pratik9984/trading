'use client'

export default function CTASection() {
    return (
        <section className="section" id="course" style={{ paddingTop: '40px', paddingBottom: '96px' }}>
            <div 
                className="cta-box fade-in"
                style={{
                    position: 'relative',
                    borderRadius: '24px',
                    padding: '80px 64px',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    gap: '64px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                <span 
                    className="cta-watermark" 
                    style={{
                        position: 'absolute',
                        right: '-20px',
                        bottom: '-40px',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '220px',
                        fontWeight: 700,
                        color: 'var(--border)',
                        lineHeight: 0.8,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        zIndex: 0,
                        opacity: 0.35
                    }}
                    aria-hidden="true"
                >
                    FREE
                </span>

                {/* Left Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p className="cta-eyebrow" style={{ fontSize: '10.5px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '16px' }}>
                        Orientation Intake Open
                    </p>
                    <h2 className="cta-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '20px' }}>
                        Start Your 3-Day Live
                        <br />
                        Academy Foundation
                    </h2>
                    <p className="cta-text" style={{ fontSize: '15px', color: 'var(--ink2)', maxWidth: '520px', lineHeight: '1.75', fontWeight: 300, margin: 0 }}>
                        Step into the arena with structured, professional training. No upfront fee, no compromises. Master macro structures, price action confirmations, and risk ceilings directly from active practitioners.
                    </p>
                    <div className="cta-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '36px' }}>
                        <a
                            href="#course"
                            className="btn btn-dark"
                            onClick={(e) => {
                                e.preventDefault()
                                window.dispatchEvent(new CustomEvent('open-course-modal'))
                            }}
                            style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            Claim Free Spot &nbsp;→
                        </a>
                        <a
                            href="https://youtube.com/@tradeguru_sagarpatil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost"
                            style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: '1.5px solid var(--border2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            Watch Analysis on YouTube
                        </a>
                    </div>
                </div>

                {/* Right — Big Number Graphic */}
                <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, textAlign: 'center', minWidth: '120px' }}>
                    <div className="cta-number" style={{ fontFamily: 'var(--font-serif)', fontSize: '120px', fontWeight: 700, color: 'var(--gold)', lineHeight: 0.9, letterSpacing: '-6px' }}>3</div>
                    <p className="cta-number-label" style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '2.5px', color: 'var(--ink3)', fontWeight: 600, margin: '8px 0 0 0' }}>
                        DAYS LIVE
                    </p>
                </div>
            </div>
        </section>
    )
}
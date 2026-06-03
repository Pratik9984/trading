'use client'

import Link from 'next/link'

const kpis = [
    { value: '3-Day', label: 'Free Live Course' },
    { value: '5+', label: 'Asset Classes Covered' },
    { value: 'Daily', label: 'Live Market Alerts' },
    { value: 'Real-Time', label: 'Macro Analysis' },
]

export default function Hero() {
    return (
        <section>
            <div className="hero" style={{ paddingBottom: '72px' }}>
                <div className="hero-grid">
                    {/* Left: Content Column */}
                    <div className="hero-content">
                        {/* Live Session Badge */}
                        <div className="badge fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'var(--card)', border: '1.5px solid var(--border)', letterSpacing: '0.8px', color: 'var(--ink2)', textTransform: 'uppercase', marginBottom: '24px' }}>
                            <span className="pulse-dot" style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', flexShrink: 0 }} aria-hidden="true" />
                            Live Market Analysis session active
                        </div>

                        {/* Editorial Headline */}
                        <h1 className="hero-h1 fade-in" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(52px, 8vw, 84px)', fontWeight: 700, lineHeight: '0.92', letterSpacing: '-2.5px', color: 'var(--ink)', marginBottom: '24px' }}>
                            Learn.
                            <br />
                            <em>Trade.</em>
                            <br />
                            Grow.
                        </h1>

                        {/* Authoritative Copywriting */}
                        <p className="hero-lead fade-in" style={{ fontSize: '17px', color: 'var(--ink2)', maxWidth: '520px', lineHeight: '1.75', fontWeight: 300, marginBottom: '38px' }}>
                            Institutional-grade trading education built on real-time market intelligence. Protect your capital, master risk distribution, and trade with mathematical consistency.
                        </p>

                        {/* Action Buttons */}
                        <div className="hero-actions fade-in" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '60px' }}>
                            <a 
                                href="#course" 
                                className="btn btn-dark"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.dispatchEvent(new CustomEvent('open-course-modal'))
                                }}
                                style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            >
                                Get 3 Days Free &nbsp;→
                            </a>
                            <Link 
                                href="#news" 
                                className="btn btn-ghost"
                                style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: '1.5px solid var(--border2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            >
                                View Market News
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual Trading Terminal Card */}
                    <div className="hero-visual fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="trading-card" style={{ background: 'rgba(13, 20, 32, 0.96)', borderRadius: '18px', border: '1px solid rgba(204, 166, 51, 0.25)', boxShadow: '0 24px 60px rgba(0,0,0,0.45)', padding: '24px', width: '100%', maxWidth: '420px', position: 'relative' }}>
                            {/* Card Header */}
                            <div className="tc-header" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', paddingBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '18px' }}>
                                <span className="tc-badge" style={{ fontSize: '9px', fontWeight: 700, color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    ● LIVE ORDER
                                </span>
                                <span className="tc-title" style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.45)', marginLeft: 'auto' }}>
                                    Gold (XAUUSD) Analysis
                                </span>
                            </div>

                            {/* Chart Area */}
                            <div className="traders-sign" style={{ background: '#070a12', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', height: '190px', position: 'relative', overflow: 'hidden', marginBottom: '8px' }}>
                                <div className="chart-grid-bg" />
                                
                                <div className="target-line" style={{ position: 'absolute', top: '35px', left: 0, right: 0, borderTop: '1px dashed rgba(34, 197, 94, 0.4)', zIndex: 2 }}>
                                    <span style={{ fontSize: '8px', color: '#22c55e', fontWeight: 700, background: '#070a12', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '2px 6px', borderRadius: '4px', position: 'absolute', left: '12px', transform: 'translateY(-50%)', letterSpacing: '0.5px' }}>
                                        TAKE PROFIT (TP) TARGET
                                    </span>
                                </div>

                                <svg className="chart-svg" viewBox="0 0 300 150" aria-hidden="true" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 3 }}>
                                    <defs>
                                        <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.0" />
                                        </linearGradient>
                                    </defs>
                                    
                                    <line x1="20" y1="120" x2="280" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
                                    
                                    <path 
                                        className="trend-area"
                                        d="M20,120 L80,105 L130,115 L180,75 L230,85 L280,35 L280,150 L20,150 Z"
                                        fill="url(#chart-grad)"
                                    />
                                    
                                    <path 
                                        className="trend-path"
                                        d="M20,120 L80,105 L130,115 L180,75 L230,85 L280,35" 
                                        fill="none" 
                                        stroke="var(--gold)" 
                                        strokeWidth="3" 
                                    />
                                    
                                    <circle className="crosshair-dot" cx="280" cy="35" r="4.5" fill="#22c55e" />
                                    <circle className="crosshair-pulse" cx="280" cy="35" r="10" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                                </svg>

                                <div className="buy-trigger" style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(184, 150, 46, 0.12)', border: '1px solid rgba(184, 150, 46, 0.25)', color: 'var(--gold)', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', zIndex: 4, display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.5px' }}>
                                    <span className="blink-dot" />
                                    BUY ENTRY COMPLETED
                                </div>
                            </div>

                            {/* Gain Floating Badge */}
                            <div className="gain-sign" style={{ background: '#22c55e', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255, 255, 255, 0.15)', position: 'absolute', bottom: '-12px', right: '-12px', boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)' }}>
                                <span className="gs-icon" style={{ fontSize: '10px', color: '#fff' }}>▲</span>
                                <div className="gs-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className="gs-label" style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '0.5px' }}>PROFIT COMPLETED</span>
                                    <span className="gs-value" style={{ fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>+184.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimalist Stats Columns */}
                <div className="hero-kpi fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '40px', paddingTop: '40px', borderTop: '1px solid var(--border)', marginTop: '48px' }}>
                    {kpis.map((item) => (
                        <div className="kpi" key={item.label}>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-1.5px', marginBottom: '4px', lineHeight: '1.1' }}>
                                {item.value}
                            </h3>
                            <p style={{ fontSize: '11px', color: 'var(--ink3)', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 500, margin: 0 }}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
const events = [
    {
        time: '05:45 PM',
        title: 'ADP Nonfarm Employment Change',
        subtitle: 'ADP Private Sector Employment Report',
        highlight: false,
        type: 'neutral' as const,
        points: [
            { text: 'Measures private sector job growth in the U.S.' },
            { text: 'Higher than expected = ', tag: 'USD Bullish', type: 'bull' as const },
            { text: 'Lower than expected = ', tag: 'Gold Bullish', type: 'bear' as const },
        ],
        assets: ['Gold (XAUUSD)', 'US Dollar Index'],
    },
    {
        time: '07:15 PM',
        title: 'S&P Global Services PMI',
        subtitle: 'PMI Services Output Index',
        highlight: false,
        type: 'neutral' as const,
        points: [
            { text: 'Shows expansion/contraction of U.S. service sector' },
            { text: 'Strong PMI = ', tag: 'Strong USD', type: 'bull' as const },
            { text: 'Weak PMI = ', tag: 'Pressure on USD', type: 'bear' as const },
        ],
        assets: ['EURUSD', 'GBPUSD'],
    },
    {
        time: '07:30 PM',
        title: 'ISM Non-Manufacturing PMI',
        subtitle: 'Key U.S. Economic Health Barometer',
        highlight: true,
        type: 'high' as const,
        points: [
            { text: 'Primary gauge of U.S. service-based economic health' },
            { text: 'Deviations trigger ', tag: 'extreme volatility', type: 'bear' as const, suffix: ' across assets' },
        ],
        assets: ['Gold · XAUUSD', 'EURUSD', 'GBPUSD', 'US Indices'],
    },
]

export default function NewsSection() {
    return (
        <div className="news-band" id="news" style={{ background: 'var(--bg-dark-section)', padding: '96px 32px' }}>
            <div className="news-inner" style={{ maxWidth: '1180px', margin: '0 auto' }}>
                {/* Header */}
                <div className="news-top" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', gap: '24px', flexWrap: 'wrap' }}>
                    <div>
                        <p className="news-eye" style={{ fontSize: '10.5px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '14px' }}>
                            Today&apos;s Schedule · USD Market Alert
                        </p>
                        <h2 className="news-h2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-1.5px', lineHeight: '1.05', margin: 0 }}>
                            High Impact
                            <br />
                            Market Events
                        </h2>
                    </div>
                    <div className="news-note" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="live-dot" style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', flexShrink: 0 }} aria-hidden="true" />
                        Live Impact Analysis — IST Session
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                    {events.map((event) => (
                        <div
                            key={event.time}
                            className={`news-card fade-in${event.highlight ? ' highlight' : ''}`}
                            style={{
                                border: event.highlight 
                                    ? '1.5px solid rgba(204, 166, 51, 0.4)' 
                                    : '1.5px solid rgba(255, 255, 255, 0.06)',
                                background: event.highlight 
                                    ? 'linear-gradient(135deg, rgba(204, 166, 51, 0.05) 0%, rgba(0,0,0,0) 100%)' 
                                    : 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                padding: '36px 30px',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {event.highlight && (
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gold)' }} />
                            )}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                <div>
                                    <span className="nc-time" style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '-1px', lineHeight: 1, display: 'block' }}>
                                        {event.time}
                                    </span>
                                    <span className="nc-tz" style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px', display: 'block' }}>
                                        IST Session
                                    </span>
                                </div>
                                {event.highlight ? (
                                    <span className="imp-tag" style={{ background: 'var(--gold)', color: '#060b13', fontSize: '9px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px', display: 'inline-block' }}>
                                        ⭐ High Volatility
                                    </span>
                                ) : (
                                    <span style={{ border: '1px solid rgba(255, 255, 255, 0.15)', color: 'rgba(255, 255, 255, 0.5)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', display: 'inline-block' }}>
                                        Medium Impact
                                    </span>
                                )}
                            </div>

                            <h3 className="nc-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', fontWeight: 600, color: '#ffffff', lineHeight: '1.25', marginBottom: '6px', letterSpacing: '-0.3px' }}>
                                {event.title}
                            </h3>
                            <p className="nc-sub" style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '28px', fontWeight: 300 }}>
                                {event.subtitle}
                            </p>

                            <ul className="nc-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: '0 0 28px 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                                {event.points.map((pt, i) => (
                                    <li key={i} style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '18px', position: 'relative', lineHeight: '1.5' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                                        {pt.text}
                                        {pt.tag && (
                                            <span style={{ color: pt.type === 'bull' ? '#4ade80' : '#fb923c', fontWeight: 600 }}>{pt.tag}</span>
                                        )}
                                        {'suffix' in pt && pt.suffix}
                                    </li>
                                ))}
                            </ul>

                            {event.assets.length > 0 && (
                                <div className="asset-row" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
                                    {event.assets.map((asset) => (
                                        <span className="asset-tag" key={asset} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.04)', color: 'rgba(255, 255, 255, 0.65)', fontSize: '10px', fontWeight: 500, padding: '4px 10px', borderRadius: '4px', letterSpacing: '0.2px' }}>
                                            {asset}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
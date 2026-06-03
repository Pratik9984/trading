const pillars = [
    {
        num: '01',
        icon: '📚',
        title: 'Learn',
        desc: 'Build a deep foundation of market knowledge — from macroeconomic structures and price action models to institutional flow dynamics. Knowledge is your primary edge.',
    },
    {
        num: '02',
        icon: '📈',
        title: 'Trade',
        desc: 'Execute with mathematical precision. Apply systematic entry, exit, and risk-management protocols. Eliminate emotional reaction and prioritize rule compliance.',
    },
    {
        num: '03',
        icon: '🎯',
        title: 'Grow',
        desc: 'Consistency compounds. Evaluate your performance journal, refine execution statistics, and compound your capital in the long game — not overnight.',
    },
]

export default function Pillars() {
    return (
        <section className="section" id="pillars" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
            <p className="sec-eyebrow">Our Core Paradigm</p>
            <h2 className="sec-title">Three Pillars of Trading Mastery</h2>

            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '36px' }}>
                {pillars.map((pillar) => (
                    <div 
                        className="pillar-card fade-in" 
                        key={pillar.num}
                        style={{
                            background: 'var(--card)',
                            borderRadius: '16px',
                            padding: '40px 32px',
                            border: '1.5px solid var(--border)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
                            <div 
                                className="pillar-icon" 
                                style={{ 
                                    width: '44px', 
                                    height: '44px', 
                                    borderRadius: '10px', 
                                    background: 'rgba(184, 150, 46, 0.05)', 
                                    border: '1px solid var(--border)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '20px',
                                    margin: 0
                                }} 
                                aria-hidden="true"
                            >
                                {pillar.icon}
                            </div>
                            <span 
                                className="pillar-n" 
                                style={{ 
                                    fontFamily: 'var(--font-serif)', 
                                    fontSize: '52px', 
                                    fontWeight: 700, 
                                    color: 'var(--border2)', 
                                    lineHeight: 1, 
                                    letterSpacing: '-2px',
                                    userSelect: 'none',
                                    margin: 0
                                }} 
                                aria-hidden="true"
                            >
                                {pillar.num}
                            </span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px', letterSpacing: '-0.3px' }}>
                            {pillar.title}
                        </h3>
                        <p style={{ fontSize: '13.5px', color: 'var(--ink2)', lineHeight: '1.75', margin: 0, fontWeight: 300 }}>
                            {pillar.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
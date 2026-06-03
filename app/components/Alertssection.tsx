const alerts = [
    {
        type: 'volatility',
        icon: '⚡',
        bg: 'rgba(239, 68, 68, 0.06)',
        border: 'rgba(239, 68, 68, 0.15)',
        title: 'High Volatility Expected',
        desc: 'Multiple high-impact events scheduled — size down and stay sharp.',
    },
    {
        type: 'leverage',
        icon: '⚖️',
        bg: 'rgba(245, 158, 11, 0.06)',
        border: 'rgba(245, 158, 11, 0.15)',
        title: 'Avoid Over-Leverage',
        desc: 'Keep position sizes conservative around news releases today.',
    },
    {
        type: 'stoploss',
        icon: '🛡️',
        bg: 'rgba(16, 185, 129, 0.06)',
        border: 'rgba(16, 185, 129, 0.15)',
        title: 'Trade with Stop Loss',
        desc: 'Always define your risk before entering. No exceptions — ever.',
    },
    {
        type: 'confirmation',
        icon: '⏳',
        bg: 'rgba(59, 130, 246, 0.06)',
        border: 'rgba(59, 130, 246, 0.15)',
        title: 'Wait for Confirmation',
        desc: 'Let the candle close before entering. Patience beats impulsiveness.',
    },
]

export default function AlertsSection() {
    return (
        <section className="section" id="alerts" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
            <p className="sec-eyebrow">Risk Preservation</p>
            <h2 className="sec-title">Active Risk Guidelines</h2>

            <div className="alert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '36px' }}>
                {alerts.map((alert) => (
                    <div 
                        className={`alert-card ac-${alert.type} fade-in`} 
                        key={alert.title}
                        style={{
                            background: 'var(--card)',
                            border: `1.5px solid ${alert.border}`,
                            borderRadius: '16px',
                            padding: '30px 24px',
                            textAlign: 'left',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                    >
                        <div 
                            className="al-icon" 
                            style={{ 
                                background: alert.bg,
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                marginBottom: '20px',
                                marginLeft: 0,
                                border: `1px solid ${alert.border}`
                            }} 
                            aria-hidden="true"
                        >
                            {alert.icon}
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.2px' }}>
                            {alert.title}
                        </h4>
                        <p style={{ fontSize: '13px', color: 'var(--ink2)', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                            {alert.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
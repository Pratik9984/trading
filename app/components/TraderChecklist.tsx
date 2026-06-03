'use client'

import { useState } from 'react'

const rules = [
    { id: 'trend', text: 'Market Trend Identified (Align with higher-timeframe structure)' },
    { id: 'news', text: 'Economic Calendar Cleared (No high-impact releases within 30 mins)' },
    { id: 'risk', text: 'Stop Loss & Position Size Calculated (Strict 1-2% risk ceiling)' },
    { id: 'trigger', text: 'Candle Pattern Confirmed (Awaiting the candle close to trigger)' },
]

export default function TraderChecklist() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
        trend: false,
        news: false,
        risk: false,
        trigger: false,
    })

    const handleToggle = (id: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    const checkedCount = Object.values(checkedItems).filter(Boolean).length
    const scorePercentage = Math.round((checkedCount / rules.length) * 100)
    const allChecked = checkedCount === rules.length

    // Circular gauge calculations
    const radius = 38
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (scorePercentage / 100) * circumference

    return (
        <section className="section" id="checklist-tool" style={{ paddingTop: '20px' }}>
            <p className="sec-eyebrow">Execution Cockpit</p>
            <h2 className="sec-title">Pre-Trade Discipline Verification</h2>

            <div className="checklist-container fade-in">
                <div className="checklist-card">
                    {/* Left Column: Rules Selection */}
                    <div className="checklist-rules">
                        <p className="chk-label">Systemic Rules Checklist</p>
                        <ul className="rules-list">
                            {rules.map((rule) => (
                                <li 
                                    key={rule.id} 
                                    className={`rule-item ${checkedItems[rule.id] ? 'active' : ''}`}
                                    onClick={() => handleToggle(rule.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        border: '1.5px solid var(--border)',
                                        background: checkedItems[rule.id] 
                                            ? 'rgba(184, 150, 46, 0.04)' 
                                            : 'var(--card)',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        marginBottom: '12px'
                                    }}
                                >
                                    <div 
                                        className="rule-checkbox"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '6px',
                                            border: '1.5px solid var(--border2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            background: checkedItems[rule.id] ? 'var(--gold)' : 'rgba(0, 0, 0, 0.05)',
                                            borderColor: checkedItems[rule.id] ? 'var(--gold)' : 'var(--border2)',
                                            color: '#060b13',
                                            transition: 'all 0.25s ease'
                                        }}
                                    >
                                        {checkedItems[rule.id] && (
                                            <svg 
                                                width="12" 
                                                height="12" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="#060b13" 
                                                strokeWidth="4" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </div>
                                    <span 
                                        className="rule-text"
                                        style={{
                                            fontSize: '14px',
                                            color: checkedItems[rule.id] ? 'var(--ink)' : 'var(--ink2)',
                                            fontWeight: checkedItems[rule.id] ? 500 : 400,
                                            textDecoration: checkedItems[rule.id] ? 'line-through opacity 0.5' : 'none',
                                            transition: 'all 0.25s ease'
                                        }}
                                    >
                                        {rule.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Readiness Status */}
                    <div className="checklist-status" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px 24px' }}>
                        <p className="chk-label" style={{ marginBottom: '24px', alignSelf: 'stretch' }}>Readiness Index</p>
                        
                        {/* Circular Progress Gauge */}
                        <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '28px' }}>
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <circle 
                                    cx="50" 
                                    cy="50" 
                                    r={radius} 
                                    stroke="var(--border)" 
                                    strokeWidth="5" 
                                    fill="transparent" 
                                />
                                <circle 
                                    cx="50" 
                                    cy="50" 
                                    r={radius} 
                                    stroke={allChecked ? '#22c55e' : 'var(--gold)'} 
                                    strokeWidth="5" 
                                    fill="transparent" 
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                    style={{ 
                                        transition: 'stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.4s ease',
                                        filter: allChecked ? 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.35))' : 'drop-shadow(0 0 4px rgba(184, 150, 46, 0.2))'
                                    }}
                                />
                            </svg>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: 'var(--ink)'
                                }}>
                                    {scorePercentage}%
                                </span>
                            </div>
                        </div>

                        <div className="readiness-status-box" style={{ width: '100%' }}>
                            {allChecked ? (
                                <div className="status-badge ready" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.2)', marginBottom: '16px' }}>
                                    <span className="pulse-dot-green" />
                                    <span>SYSTEM CLEARED — EXECUTE</span>
                                </div>
                            ) : (
                                <div className="status-badge waiting" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(184, 150, 46, 0.08)', color: 'var(--gold)', border: '1px solid rgba(184, 150, 46, 0.15)', marginBottom: '16px' }}>
                                    <span className="pulse-dot-yellow" />
                                    <span>AWAITING RULES</span>
                                </div>
                            )}
                            <p className="status-tip" style={{ fontSize: '12.5px', color: 'var(--ink2)', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                                {allChecked 
                                    ? "All rules align. Manage your risk, keep size within parameters, execute with cold discipline." 
                                    : "Do not rush. Let market triggers confirm. Patience builds compounding returns."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

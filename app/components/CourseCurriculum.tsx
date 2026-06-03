'use client'

import { useState } from 'react'

const syllabus = [
    {
        day: 'Day 01',
        title: 'Market Structure & Price Action',
        points: [
            'Understanding Candlestick Basics & Price Action dynamics',
            'Identifying Support & Resistance zones with institutional levels',
            'Market Phase Cycles: Accumulation, Markup, Distribution & Markdown',
            'Mapping out key market trends and execution setups'
        ]
    },
    {
        day: 'Day 02',
        title: 'Macro Economics & High-Impact News',
        points: [
            'ADP Employment, NFP, CPI, and PMI report breakdowns',
            'How to trade high volatility safely without blowing accounts',
            'Live impact analysis across major pairs (USD, Gold, GBP)',
            'Fundamental triggers vs. technical chart levels'
        ]
    },
    {
        day: 'Day 03',
        title: 'Risk Management & Trading Psychology',
        points: [
            'Calculating precise position sizing based on risk-to-reward ratio',
            'Setting stop loss (SL) and take profit (TP) targets mathematically',
            'Rules of discipline: Managing FOMO, revenge trading, and fear',
            'Maintaining a trade journal and evaluating key performance metrics'
        ]
    }
]

export default function CourseCurriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <section className="section" id="curriculum" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
            <p className="sec-eyebrow">Course Syllabus</p>
            <h2 className="sec-title">What you will learn in 3 days</h2>

            <div className="curriculum-container fade-in">
                <div className="curriculum-list">
                    {syllabus.map((item, idx) => {
                        const isOpen = openIndex === idx
                        return (
                            <div 
                                key={idx} 
                                className={`curriculum-item ${isOpen ? 'open' : ''}`}
                            >
                                <div 
                                    className="curriculum-header" 
                                    onClick={() => handleToggle(idx)}
                                >
                                    <div className="curr-day-badge">{item.day}</div>
                                    <h3 className="curr-day-title">{item.title}</h3>
                                    <span className="curr-toggle-icon">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="curriculum-body">
                                    <ul className="curr-points-list">
                                        {item.points.map((pt, i) => (
                                            <li key={i}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

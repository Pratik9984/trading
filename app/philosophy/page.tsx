import Navbar from '../components/Navbar'
import Pillars from '../components/Pillars'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import FadeInObserver from '../components/Fadeinobserver'

export default function PhilosophyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow" style={{ paddingTop: '68px' }}>
                {/* Intro Header */}
                <section className="section" style={{ paddingBottom: '30px' }}>
                    <div className="fade-in" style={{ maxWidth: '800px', marginTop: '40px' }}>
                        <p className="sec-eyebrow">Our Vision</p>
                        <h1 
                            className="sec-title" 
                            style={{ 
                                fontSize: 'clamp(40px, 6vw, 68px)', 
                                lineHeight: '1.05', 
                                marginBottom: '24px' 
                            }}
                        >
                            The Discipline of <em>Consistency.</em>
                        </h1>
                        <p 
                            style={{ 
                                fontSize: '18px', 
                                color: 'var(--ink2)', 
                                lineHeight: '1.7', 
                                fontWeight: 300 
                            }}
                        >
                            At Trade Guru International Trainings Academy, we believe that trading is not a game of chance or high-leverage gambles. It is a structured profession that demands patience, mental fortitude, and a mathematical edge. Our philosophy is built on equipping you with real-time market intelligence and strict risk controls.
                        </p>
                    </div>
                </section>

                {/* The 3 Pillars Section */}
                <Pillars />

                {/* Extended Details Section */}
                <section className="section" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
                    <div 
                        className="fade-in" 
                        style={{ 
                            background: 'var(--card)', 
                            borderRadius: 'var(--radius)', 
                            padding: '48px', 
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow)'
                        }}
                    >
                        <h3 
                            style={{ 
                                fontFamily: 'var(--font-serif)', 
                                fontSize: '32px', 
                                fontWeight: 700, 
                                marginBottom: '20px',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Discipline Today — Freedom Tomorrow
                        </h3>
                        <div 
                            style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                                gap: '32px',
                                marginTop: '30px'
                            }}
                        >
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '16px', marginBottom: '10px', color: 'var(--ink)' }}>
                                    🛡️ Risk First, Return Second
                                </h4>
                                <p style={{ fontSize: '14px', color: 'var(--ink2)', lineHeight: '1.6' }}>
                                    Every professional trader understands that their primary job is risk preservation. Before entering any position, we calculate exactly what we stand to lose, and only risk capital that we can afford to lose.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '16px', marginBottom: '10px', color: 'var(--ink)' }}>
                                    🧠 System over Emotions
                                </h4>
                                <p style={{ fontSize: '14px', color: 'var(--ink2)', lineHeight: '1.6' }}>
                                    Markets are designed to exploit human emotions like fear and greed. We train our minds to follow predefined systems, checklist confirmations, and strict candlestick rules.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '16px', marginBottom: '10px', color: 'var(--ink)' }}>
                                    📈 Continuous Iteration
                                </h4>
                                <p style={{ fontSize: '14px', color: 'var(--ink2)', lineHeight: '1.6' }}>
                                    Success is built on review. We maintain detailed trading journals, evaluate performance statistics weekly, and refine our execution patterns. Consistency compounds.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <CTASection />
            </main>

            <Footer />
            <FadeInObserver />
        </div>
    )
}

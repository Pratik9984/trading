'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    const handleCtaClick = (e: React.MouseEvent) => {
        e.preventDefault()
        closeMobileMenu()
        window.dispatchEvent(new CustomEvent('open-course-modal'))
    }

    return (
        <nav>
            <div className="nav-wrap">
                {/* Logo */}
                <Link href="/" className="logo-mark" onClick={closeMobileMenu}>
                    <div className="logo-bull">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            {/* Circular Laurel Wreath leaves */}
                            <path d="M30,50 C30,30 40,20 50,20" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M70,50 C70,30 60,20 50,20" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M30,60 C30,75 40,80 50,80" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M70,60 C70,75 60,80 50,80" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" />
                            
                            {/* Leaf branches decals */}
                            <path d="M26,38 L32,42 M24,28 L32,34 M34,20 L40,28" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                            <path d="M74,38 L68,42 M76,28 L68,34 M66,20 L60,28" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                            <path d="M26,62 L32,58 M24,72 L32,66 M34,80 L40,72" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                            <path d="M74,62 L68,58 M76,72 L68,66 M66,80 L60,72" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                            
                            {/* Charging bull outline and green upward arrow */}
                            <path d="M42,50 L48,46 L58,49 L64,43" stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38,62 L50,44 L62,56 L72,36 M72,36 L62,36 M72,36 L72,46" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <span className="logo-name">Trade Guru</span>
                        <span className="logo-sub">International Trainings Academy</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="nav-links desktop-only">
                    <li>
                        <Link href="/philosophy">Philosophy</Link>
                    </li>
                    <li>
                        <Link href="#news">Market News</Link>
                    </li>
                    <li>
                        <Link href="#alerts">Trader Alerts</Link>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeToggle />
                    </li>
                    <li>
                        <a 
                            href="#course" 
                            className="nav-cta"
                            onClick={handleCtaClick}
                        >
                            Free Course →
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button 
                    className={`nav-hamburger ${mobileMenuOpen ? 'open' : ''}`} 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </div>

            {/* Mobile Menu Drawer Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                    <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
                        <ul className="mobile-nav-links">
                            <li>
                                <Link href="/philosophy" onClick={closeMobileMenu}>Philosophy</Link>
                            </li>
                            <li>
                                <Link href="#news" onClick={closeMobileMenu}>Market News</Link>
                            </li>
                            <li>
                                <Link href="#alerts" onClick={closeMobileMenu}>Trader Alerts</Link>
                            </li>
                            <li className="mobile-menu-theme-row">
                                <span>Theme Preference</span>
                                <ThemeToggle />
                            </li>
                            <li>
                                <a 
                                    href="#course" 
                                    className="nav-cta mobile-cta"
                                    onClick={handleCtaClick}
                                >
                                    Free Course →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}
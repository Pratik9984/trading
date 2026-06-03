'use client'

import { useState, useEffect, FormEvent } from 'react'

export default function CourseModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState<1 | 2 | 3>(1) // 1 = Form, 2 = Loading, 3 = Success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        experience: 'beginner',
    })

    useEffect(() => {
        const handleOpen = () => {
            setStep(1)
            setIsOpen(true)
        }
        window.addEventListener('open-course-modal', handleOpen)
        return () => window.removeEventListener('open-course-modal', handleOpen)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setStep(2) // Transition to loading state
        
        setTimeout(() => {
            setStep(3) // Transition to success state after 1.2s
        }, 1200)
    }

    if (!isOpen) return null

    return (
        <div 
            className="modal-overlay fade-in visible" 
            onClick={(e) => e.target === e.currentTarget && handleClose()}
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-card">
                {/* Close Button */}
                <button 
                    className="modal-close-btn" 
                    onClick={handleClose} 
                    aria-label="Close modal"
                >
                    &times;
                </button>

                {/* Form Step */}
                {step === 1 && (
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="modal-header">
                            <span className="modal-badge">3 DAYS FREE COURSE</span>
                            <h3>Claim Your Spot</h3>
                            <p>Fill in your details below to secure your basic course registration.</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="modal-name">Full Name</label>
                            <input
                                type="text"
                                id="modal-name"
                                name="name"
                                required
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="modal-whatsapp">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="modal-whatsapp"
                                name="whatsapp"
                                required
                                placeholder="e.g. +91 98765 43210"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="modal-email">Email Address</label>
                            <input
                                type="email"
                                id="modal-email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="modal-experience">Trading Experience</label>
                            <select
                                id="modal-experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="beginner">Beginner (New to charts)</option>
                                <option value="intermediate">Intermediate (Know indicators/patterns)</option>
                                <option value="advanced">Advanced (Active market trader)</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-dark modal-submit-btn">
                            Register & Secure Spot →
                        </button>
                    </form>
                )}

                {/* Loading Step */}
                {step === 2 && (
                    <div className="modal-loading">
                        <div className="modal-spinner" />
                        <h4>Securing Your Spot...</h4>
                        <p>Registering user details on Trade Guru Academy secure database.</p>
                    </div>
                )}

                {/* Success Step */}
                {step === 3 && (
                    <div className="modal-success">
                        <div className="success-icon-wrap">
                            <svg 
                                width="44" 
                                height="44" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#22c55e" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3>Spot Reserved Successfully!</h3>
                        <p className="success-msg">
                            Congratulations <strong>{formData.name}</strong>, your request for the 3 Days Basic Course is confirmed.
                        </p>
                        
                        <div className="success-action-box">
                            <p>To access the live orientation link and daily alerts, join our private community group now:</p>
                            <a
                                href="https://wa.me/918459145899?text=Hello%20Trade%20Guru%2C%20I%20have%20registered%20for%20the%203-day%20free%20course."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp-join"
                            >
                                Join Private WhatsApp Group &nbsp;↗
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false)

    useEffect(() => {
        // Show the tooltip after 3 seconds to draw subtle attention
        const timer = setTimeout(() => {
            setShowTooltip(true)
        }, 3000)

        // Hide it after 9 seconds automatically to not be intrusive
        const hideTimer = setTimeout(() => {
            setShowTooltip(false)
        }, 9000)

        return () => {
            clearTimeout(timer)
            clearTimeout(hideTimer)
        }
    }, [])

    return (
        <div className="whatsapp-floating-container">
            {showTooltip && (
                <div className="whatsapp-tooltip">
                    <span className="whatsapp-tooltip-close" onClick={() => setShowTooltip(false)} aria-label="Close tooltip">
                        &times;
                    </span>
                    <p className="whatsapp-tooltip-title">Trade Guru Academy</p>
                    <p className="whatsapp-tooltip-text">Chat with Sagar Patil on WhatsApp for Course Details! 💬</p>
                </div>
            )}
            
            <a
                href="https://wa.me/918459145899"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.388 5.61A8.956 8.956 0 0012 3a8.966 8.966 0 00-7.79 13.46L3 21l4.673-1.225A8.948 8.948 0 0012 21a8.966 8.966 0 007.79-13.46 8.95 8.95 0 00-1.402-1.93zM12 19.5a7.511 7.511 0 01-3.83-1.047l-.275-.164-2.846.746.758-2.774-.18-.287A7.502 7.502 0 014.5 12c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5zm4.12-5.632c-.226-.113-1.336-.66-1.543-.735-.207-.075-.357-.113-.508.113-.15.226-.583.735-.714.886-.132.15-.264.17-.49.057-.226-.113-.954-.352-1.817-1.123-.672-.6-1.125-1.34-1.257-1.566-.132-.226-.014-.348.099-.46.102-.102.226-.264.339-.396.113-.132.15-.226.226-.377.075-.15.037-.282-.019-.396-.056-.113-.508-1.224-.696-1.677-.183-.44-.37-.38-.508-.387-.132-.007-.283-.008-.434-.008s-.395.056-.602.282c-.207.226-.79.773-.79 1.884s.81 2.185.922 2.336c.113.15 1.593 2.433 3.86 3.41.539.232.96.37 1.288.475.54.172 1.03.147 1.419.09.433-.064 1.336-.547 1.525-1.074.19-.528.19-.98.132-1.074-.056-.094-.207-.15-.433-.264z"
                        fill="currentColor"
                    />
                </svg>
                <span className="whatsapp-pulse"></span>
            </a>
        </div>
    )
}

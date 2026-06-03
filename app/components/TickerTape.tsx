'use client'

import { useEffect, useRef, useState } from 'react'

export default function TickerTape() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    useEffect(() => {
        if (typeof window === 'undefined') return

        const getTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme')
            return currentTheme === 'light' ? 'light' : 'dark'
        }

        // Set initial theme
        setTheme(getTheme())

        const observer = new MutationObserver(() => {
            setTheme(getTheme())
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!containerRef.current) return

        containerRef.current.innerHTML = ''

        // Create the tradingview widget container inner div
        const widget = document.createElement('div')
        widget.className = 'tradingview-widget-container__widget'
        containerRef.current.appendChild(widget)

        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.type = 'text/javascript'
        script.async = true
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: 'FX:XAUUSD', title: 'GOLD (XAUUSD)' },
                { proName: 'FX_IDC:EURUSD', title: 'EURUSD' },
                { proName: 'FX_IDC:GBPUSD', title: 'GBPUSD' },
                { proName: 'FOREXCOM:SPX500', title: 'S&P 500' },
                { proName: 'BITSTAMP:BTCUSD', title: 'BTCUSD' }
            ],
            showSymbolLogo: true,
            colorTheme: theme,
            isTransparent: true,
            displayMode: 'adaptive',
            locale: 'en'
        })

        containerRef.current.appendChild(script)
    }, [theme])

    return (
        <div className="ticker-tape-container">
            <div className="tradingview-widget-container" ref={containerRef} />
        </div>
    )
}

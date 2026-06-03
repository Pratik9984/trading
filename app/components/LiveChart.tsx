'use client'

import { useEffect, useRef, useState } from 'react'
import TickerTape from './TickerTape'

export default function LiveChart() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [libraryLoaded, setLibraryLoaded] = useState(false)

    // 1. Observe data-theme changes on documentElement
    useEffect(() => {
        if (typeof window === 'undefined') return

        const getTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme')
            return currentTheme === 'light' ? 'light' : 'dark'
        }

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

    // 2. Load the TradingView tv.js script once on mount
    useEffect(() => {
        if (typeof window === 'undefined') return

        // Check if already loaded
        if ((window as any).TradingView) {
            setLibraryLoaded(true)
            return
        }

        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.async = true
        script.onload = () => {
            setLibraryLoaded(true)
        }

        if (containerRef.current) {
            containerRef.current.appendChild(script)
        }
    }, [])

    // 3. Render or Re-render the widget when library is loaded OR theme changes
    useEffect(() => {
        if (!libraryLoaded || typeof window === 'undefined' || !(window as any).TradingView) return

        // Clear the element's internal content to force-rebuild the iframe
        const chartElement = document.getElementById('tradingview_live_chart')
        if (chartElement) {
            chartElement.innerHTML = ''
        }

        new (window as any).TradingView.widget({
            autosize: true,
            symbol: 'FX:XAUUSD',
            interval: '60',
            timezone: 'Asia/Kolkata',
            theme: theme,
            style: '1',
            locale: 'en',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview_live_chart',
            hide_side_toolbar: false,
            studies: [
                'RSI@tv-basicstudies',
                'MASimple@tv-basicstudies'
            ]
        })
    }, [libraryLoaded, theme])

    return (
        <section className="section" id="live-chart">
            <p className="sec-eyebrow">Interactive Data</p>
            <h2 className="sec-title">Live Market Analysis</h2>

            <div className="live-chart-wrapper fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
                <TickerTape />
                <div id="tradingview_live_chart" style={{ flexGrow: 1, width: '100%' }} />
                <div ref={containerRef} style={{ display: 'none' }} />
            </div>
        </section>
    )
}

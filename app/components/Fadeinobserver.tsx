'use client'

import { useEffect } from 'react'

export default function FadeInObserver() {
    useEffect(() => {
        if (typeof window === 'undefined') return

        // Immediately reveal elements already in the viewport
        const revealIfInView = (el: Element) => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight + 50) {
                el.classList.add('visible')
                return true
            }
            return false
        }

        // First pass: instantly reveal everything currently in view
        const initialReveal = () => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach((el, i) => {
                ;(el as HTMLElement).style.transitionDelay = (i % 4) * 0.08 + 's'
                revealIfInView(el)
            })
        }

        // Run initial reveal after React finishes painting
        requestAnimationFrame(() => {
            initialReveal()
        })

        // IntersectionObserver for elements below the fold (revealed on scroll)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible')
                        io.unobserve(e.target)
                    }
                })
            },
            { threshold: 0, rootMargin: '50px' }
        )

        // Observe remaining hidden elements
        const observeRemaining = () => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
                io.observe(el)
            })
        }

        // Start observing after initial reveal
        setTimeout(observeRemaining, 100)

        // Periodic re-check for dynamically added elements
        const interval = setInterval(() => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
                if (!revealIfInView(el)) {
                    io.observe(el)
                }
            })
        }, 500)

        // Hard fallback: after 3s, force reveal everything still hidden
        const fallback = setTimeout(() => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
                el.classList.add('visible')
            })
            clearInterval(interval)
        }, 3000)

        return () => {
            io.disconnect()
            clearInterval(interval)
            clearTimeout(fallback)
        }
    }, [])

    return null
}
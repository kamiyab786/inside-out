import { useState, useEffect, useCallback, useRef } from 'react'
import useReveal from './hooks/useReveal'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Context from './components/Context'
import Talks from './components/Talks'
import Outcomes from './components/Outcomes'
import Method from './components/Method'
import Advisory from './components/Advisory'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Media from './components/Media'
import Booking from './components/Booking'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const NAV_LINKS = [
    { id: 'context', label: 'Context' },
    { id: 'talks', label: 'Talks' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
]

export default function App() {
    const [loading, setLoading] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const [expandedTalk, setExpandedTalk] = useState([])
    const [showTop, setShowTop] = useState(false)

    // Reveal refs for each section
    const contextRef = useReveal()
    const talksRef = useReveal()
    const outcomesRef = useReveal()
    const methodRef = useReveal()
    const advisoryRef = useReveal()
    const processRef = useReveal()
    const testimonialsRef = useReveal()
    const aboutRef = useReveal()
    const mediaRef = useReveal()
    const bookingRef = useReveal()
    const heroRef = useRef(null)

    // Scroll handler — navbar + back-to-top
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
            setShowTop(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    // Cursor glow (desktop only)
    useEffect(() => {
        if (!window.matchMedia('(pointer:fine)').matches) return
        const glow = document.createElement('div')
        glow.className = 'cursor-glow'
        document.body.appendChild(glow)
        const move = (e) => { glow.style.transform = `translate(${e.clientX - 150}px,${e.clientY - 150}px)` }
        document.addEventListener('mousemove', move, { passive: true })
        return () => { document.removeEventListener('mousemove', move); glow.remove() }
    }, [])

    const scrollTo = useCallback((id) => {
        setMobileOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const handleMobileOpen = useCallback(() => setMobileOpen(true), [])
    const handleMobileClose = useCallback(() => setMobileOpen(false), [])

    return (
        <>
            {loading && <Loader onComplete={() => setLoading(false)} />}
            <Navbar scrolled={scrolled} scrollTo={scrollTo} navLinks={NAV_LINKS} onMobileOpen={handleMobileOpen} />
            <MobileMenu open={mobileOpen} onClose={handleMobileClose} navLinks={NAV_LINKS} scrollTo={scrollTo} />

            <main>
                <Hero ref={heroRef} scrollTo={scrollTo} />
                {/* <StatsStrip /> */}
                <Context ref={contextRef} />
                <Talks ref={talksRef} expandedTalk={expandedTalk} setExpandedTalk={setExpandedTalk} />
                <Outcomes ref={outcomesRef} />
                <Method ref={methodRef} />
                <Advisory ref={advisoryRef} scrollTo={scrollTo} />
                <Process ref={processRef} />
                <Testimonials ref={testimonialsRef} />
                <About ref={aboutRef} scrollTo={scrollTo} />
                <Media ref={mediaRef} />
                <Booking ref={bookingRef} />
            </main>

            <Footer scrollTo={scrollTo} />
            <BackToTop visible={showTop} />
        </>
    )
}

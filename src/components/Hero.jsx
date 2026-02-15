import { forwardRef, useEffect, useState, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

// Single video, text content cycles
const textSlides = [
    {
        topLeft: "Evidence-based",
        topRight: "support for",
        main: "students",
        sub: "RELATIONSHIPS & EMOTIONAL RESILIENCE"
    },
    {
        topLeft: "Empowering",
        topRight: "strategies for",
        main: "parents",
        sub: "RAISING CONFIDENT & RESILIENT KIDS"
    },
    {
        topLeft: "Practical",
        topRight: "training for",
        main: "staff",
        sub: "LEADERSHIP & STUDENT WELLBEING"
    }
]

const Hero = forwardRef(function Hero({ scrollTo }, ref) {
    const [textIndex, setTextIndex] = useState(0)
    const [displayMain, setDisplayMain] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [fadeClass, setFadeClass] = useState("visible")

    const slide = textSlides[textIndex]

    // Typewriter effect for mainText
    useEffect(() => {
        const target = slide.main
        let charIndex = 0
        setIsTyping(true)
        setDisplayMain("")

        const typeInterval = setInterval(() => {
            charIndex++
            setDisplayMain(target.slice(0, charIndex))
            if (charIndex >= target.length) {
                clearInterval(typeInterval)
                setIsTyping(false)
            }
        }, 80)

        return () => clearInterval(typeInterval)
    }, [textIndex, slide.main])

    // Cycle text every 4s after typing finishes
    useEffect(() => {
        if (isTyping) return
        const timeout = setTimeout(() => {
            setFadeClass("fading")
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % textSlides.length)
                setFadeClass("visible")
            }, 600) // fade-out duration
        }, 3000) // hold time after typing
        return () => clearTimeout(timeout)
    }, [isTyping])

    return (
        <section className="hero-section" id="hero" ref={ref}>
            <div className="hero-card-wrapper">
                <div className="hero-card-bg">
                    {/* Single Background Video */}
                    <div className="hero-video-layer">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1529156069893-b224d381dd8c?w=800&q=80"
                            className="hero-bg-video"
                        >
                            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                        </video>
                        <div className="hero-video-vignette" />
                    </div>

                    <div className={`hero-content-layer ${fadeClass}`}>
                        {/* Top Split Text */}
                        <div className="hero-split-row">
                            <h2 className="serif-text left">{slide.topLeft}</h2>
                            <div className="hero-spacer"></div>
                            <h2 className="serif-text right">{slide.topRight}</h2>
                        </div>

                        {/* Main Big Text with Typewriter */}
                        <div className="hero-main-row">
                            <h1 className="hero-big-title">
                                {displayMain}
                                <span className={`typing-cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
                            </h1>
                            <p className="hero-caption">{slide.sub}</p>
                        </div>
                    </div>
                </div>

                {/* Button OUTSIDE overflow:hidden container */}
                <div className="hero-cta-anchor">
                    <a href="#booking" className="hero-pill-btn" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>
                        <span className="btn-label">Book a Consultation</span>
                        <span className="btn-icon-circle"><ArrowRight size={16} /></span>
                    </a>
                </div>
            </div>
        </section>
    )
})

export default Hero

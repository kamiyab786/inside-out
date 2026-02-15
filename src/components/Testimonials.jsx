import { forwardRef, useState, useEffect, useCallback } from 'react'

const testimonials = [
    { text: '"Powerful message that really hit home."', author: 'KPU Criminology Student' },
    { text: '"The honesty and practical tools were exactly what our students needed."', author: 'Educator / Instructor' },
    { text: '"Not the usual lecture. Real, raw, and helpful."', author: 'High School Student' },
    { text: '"Changed my perspective on how small touches matter."', author: 'Justice Institute Student' },
    { text: '"Finally, a prevention talk that doesn\'t just scare us."', author: 'Student' },
    { text: '"Students were engaged from start to finish."', author: 'High School Teacher' },
    { text: '"Understanding the \'why\' behind choices was an eye opener."', author: 'Parent' },
    { text: '"Mindy\'s story and method are unforgettable."', author: 'Community Leader' }
]

const Testimonials = forwardRef(function Testimonials(props, ref) {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const maxIndex = testimonials.length - 3

    const next = useCallback(() => {
        setIndex(prev => prev >= maxIndex ? 0 : prev + 1)
    }, [maxIndex])

    const prev = useCallback(() => {
        setIndex(prev => prev <= 0 ? maxIndex : prev - 1)
    }, [maxIndex])

    useEffect(() => {
        if (paused) return
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [paused, next])

    return (
        <section className="section testimonials" ref={ref}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 3rem' }}>
                    <span className="section-label reveal" style={{ justifyContent: 'center' }}>Feedback</span>
                    <h2 className="section-title reveal">Hear from <span className="accent-italic">our</span> <span className="accent">Clients</span></h2>
                    <p className="section-sub reveal" style={{ margin: '0 auto', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '11px', fontWeight: 500 }}>Stories of Transformation</p>
                </div>
                <div
                    className="testimonial-carousel"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <button className="carousel-arrow carousel-prev" onClick={prev} aria-label="Previous">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div>
                                        <div className="tcard-quote">❝</div>
                                        <div className="tcard-author">{t.author}</div>
                                        <p>{t.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-arrow carousel-next" onClick={next} aria-label="Next">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                </div>
                <div className="carousel-dots">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot${i === index ? ' active' : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Testimonials

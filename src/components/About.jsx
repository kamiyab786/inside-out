import { forwardRef, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const accordionItems = [
    {
        title: 'My Purpose',
        content: 'I\'m also a father of two, including a four-year-old daughter. My purpose is to help build a world where kids grow up feeling safe, supported, and hopeful. I believe emotional needs being met is not "soft." It\'s protection.'
    },
    {
        title: 'Prevention Focus',
        content: 'Today, I focus on prevention: helping students, parents, and organizations understand where trouble starts, how it quietly builds over time, and how different choices change outcomes.'
    },
    {
        title: 'Our Approach',
        content: 'This is not a "scared straight" approach. The goal isn\'t fear, shock, or shame. The goal is understanding and change: helping people see what drives harmful behaviour, building empathy and belonging, and learning practical tools for emotional regulation, accountability, and better decision-making under pressure. Real-life stories are used responsibly to teach early warning signs and decision points.'
    }
]

const About = forwardRef(function About({ scrollTo }, ref) {
    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (i) => {
        setOpenAccordion(openAccordion === i ? null : i)
    }

    return (
        <section className="section about" id="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    {/* Left: Photo card with Logo badge, quote & founder name INSIDE */}
                    <div className="about-photo-col reveal">
                        <div className="about-card">
                            <div className="about-logo-badge"><Logo size={24} /></div>
                            <div className="about-img">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                    alt="Mindy Bhandher - Founder of Inside Out Mindset"
                                    loading="lazy"
                                    width={700}
                                    height={875}
                                />
                            </div>
                            <div className="about-card-footer">
                                <span className="about-quote-mark">❝</span>
                                <h3>Meet the <span className="accent-italic">founder</span> — Mindy Bhandher</h3>
                                <p>"Prevention isn't soft. It's protection."</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Header + always-visible Real Experience + Accordion */}
                    <div className="about-text-col reveal reveal-delay-1">
                        <span className="section-label">About Mindy</span>
                        <h2 className="section-title">About The <span className="accent">Founder</span></h2>

                        {/* Real Experience — always visible */}
                        <div className="about-real-exp">
                            <h4>Real Experience</h4>
                            <p>My name is Mindy Bhandher. I was raised in Surrey, BC, and I've lived both sides of the choices that can either build a life or destroy it. I take full responsibility for my past. I was convicted of second-degree murder and spent 12.5 years incarcerated.</p>
                        </div>

                        {/* Accordion sections */}
                        <div className="about-accordion">
                            {accordionItems.map((item, i) => (
                                <div key={i} className={`accordion-item${openAccordion === i ? ' open' : ''}`}>
                                    <button className="accordion-header" onClick={() => toggleAccordion(i)}>
                                        <span>{item.title}</span>
                                        <ChevronDown size={18} />
                                    </button>
                                    <div className="accordion-body">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about-actions">
                            <a href="#booking" className="link-arrow" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>
                                Know more about our approach <ArrowRight size={14} />
                            </a>
                            <div className="about-punjabi"><span className="dot" />Punjabi-Language Parent Sessions Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About

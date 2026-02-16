import { forwardRef, useRef, useEffect } from 'react'
import Logo from './Logo'

const Context = forwardRef(function Context(props, ref) {
    const progressRef = useRef(null)

    useEffect(() => {
        const el = progressRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            entries => { if (entries[0].isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
            { threshold: 0.3 }
        )
        obs.observe(el)
        return () => obs.unobserve(el)
    }, [])

    return (
        <section className="section context" id="context" ref={ref}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    {/* LEFT: Text Content */}
                    <div className="reveal">
                        <span className="section-label">The Context</span>
                        <h2 className="context-headline">
                            The gap between a bad day and a bad life is{' '}
                            <span className="accent-italic">smaller than you think.</span>
                        </h2>

                        <div className="context-text">
                            <p>
                                Without intervention, small social issues don't just go away.
                                They compound. We help schools identify the pivot point before it's too late.
                            </p>
                        </div>

                        <div className="context-quote-block">
                            <p>We focus on early warning signs, belonging, and decision points that change outcomes.</p>
                        </div>
                    </div>

                    {/* RIGHT: Progress + Issues */}
                    <div className="reveal reveal-delay-1">
                        {/* Progress Bar */}
                        <div className="progress-section">
                            <div className="progress-labels">
                                <span>Small Issues</span>
                                <span className="pivot">The Pivot Point</span>
                                <span className="critical">Critical Issues</span>
                            </div>
                            <div className="progress-bar-wrap">
                                {/* <span className="progress-tag intervention">Intervention Needed</span> */}
                                <div className="progress-bar" ref={progressRef}>
                                    <div className="progress-fill" />
                                    <div className="progress-dot start" />
                                    <div className="progress-dot mid">
                                        <div className="pivot-logo"><Logo size={20} /></div>
                                        <span className="progress-tag intervention">Intervention Needed</span>
                                    </div>
                                    <div className="progress-dot end" />
                                </div>
                            </div>
                        </div>

                        {/* Issue Grid */}
                        <div className="issue-grid">
                            <div className="issue-col left">
                                <h4>Starts Here</h4>
                                <ul>
                                    <li><span className="bullet-logo"><Logo size={10} /></span>Social Isolation</li>
                                    <li><span className="bullet-logo"><Logo size={10} /></span>"Status" Teasing</li>
                                    <li><span className="bullet-logo"><Logo size={10} /></span>Impulsive Choices</li>
                                </ul>
                            </div>
                            <div className="issue-col right">
                                <h4>Ends Here</h4>
                                <ul>
                                    <li>High-Risk Peer Groups<span className="bullet-logo"><Logo size={10} /></span></li>
                                    <li>School Disengagement<span className="bullet-logo"><Logo size={10} /></span></li>
                                    <li>Violence / Exploitation<span className="bullet-logo"><Logo size={10} /></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D Image Section */}
                <div className="context-image-section reveal">
                    <div className="context-3d-wrapper">
                        <div className="orbit-ring ring-1"></div>
                        <div className="orbit-ring ring-2"></div>
                        <div className="orbit-ring ring-3"></div>
                        <div className="context-circle-img">
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=80"
                                alt="Student counselling session"
                                loading="lazy"
                                width={600}
                                height={600}
                            />
                        </div>
                        {/* Logo dots on orbit rings with labels */}
                        <div className="orbit-dot od-top">
                            <Logo size={20} />
                            <span className="od-label">Resilience</span>
                        </div>
                        <div className="orbit-dot od-right">
                            <Logo size={20} />
                            <span className="od-label">Confidence</span>
                        </div>
                        <div className="orbit-dot od-bottom">
                            <Logo size={20} />
                            <span className="od-label">Belonging</span>
                        </div>
                        <div className="orbit-dot od-left">
                            <Logo size={20} />
                            <span className="od-label">Clarity</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Context

import { forwardRef } from 'react'
import { Sparkles, Users } from 'lucide-react'
import Logo from './Logo'

const Talks = forwardRef(function Talks({ expandedTalk, setExpandedTalk }, ref) {

    const handleToggle = (index) => {
        setExpandedTalk(expandedTalk === index ? null : index)
    }

    return (
        <section className="section talks" id="talks" ref={ref}>
            <div className="container">
                <div className="talks-header reveal">
                    <div className="talks-header-row">
                        <div>
                            <span className="section-label">— Prevention First</span>
                            <h2 className="section-title">Our <span className="accent">Talks</span></h2>
                        </div>
                        <p className="talks-subtitle">Choose Your <span className="accent-audience">Audience</span></p>
                    </div>
                </div>
                <div className="grid-2">
                    {/* Talk 1 — NO reveal class to avoid disappearing on re-render */}
                    <div className={`talk-card ${expandedTalk === 0 ? 'expanded' : ''}`}>
                        <div className="talk-card-img">
                            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80" alt="Students in classroom" loading="lazy" width={600} height={400} />
                            <div className="card-overlay" />
                            <span className="card-label">For Students</span>
                        </div>
                        <div className="talk-card-top">
                            <div className="talk-card-header">
                                <div className="talk-icon"><Sparkles size={22} /></div>
                            </div>
                            <p className="cat">For Students</p>
                            <h3>High School Talk</h3>
                            <p className="talk-liner">A practical, engaging session that helps students understand the connection between their thoughts, emotions, and decisions — using real stories and relatable scenarios.</p>
                            <ul className="talk-bullets">
                                <li><span className="icon-check"><Logo size={10} /></span>Emotional triggers & how to manage them</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Building a resilient mindset</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Social media, peer pressure & identity</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Making decisions aligned with who you are</li>
                            </ul>
                        </div>
                        <div className="talk-card-expand">
                            <h4>Learning Outcomes</h4>
                            <ul>
                                <li><span className="check"><Logo size={9} /></span>Recognise and regulate emotional responses</li>
                                <li><span className="check"><Logo size={9} /></span>Build a positive and resilient self-image</li>
                                <li><span className="check"><Logo size={9} /></span>Identify toxic vs. healthy relationships</li>
                                <li><span className="check"><Logo size={9} /></span>Make choices aligned with core values</li>
                                <li><span className="check"><Logo size={9} /></span>Develop strategies for managing stress & anxiety</li>
                            </ul>
                            <p className="outcome">"Students leave with a real shift in how they understand themselves and the choices they make."</p>
                        </div>
                        <div className="talk-card-footer" onClick={() => handleToggle(0)}>
                            <span>{expandedTalk === 0 ? 'HIDE OUTCOMES' : 'VIEW OUTCOMES'}</span>
                            <div className="talk-toggle"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
                        </div>
                    </div>

                    {/* Talk 2 — NO reveal class to avoid disappearing on re-render */}
                    <div className={`talk-card ${expandedTalk === 1 ? 'expanded' : ''}`}>
                        <div className="talk-card-img">
                            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80" alt="Community group discussion" loading="lazy" width={600} height={400} />
                            <div className="card-overlay" />
                            <span className="card-label">For Parents & Community</span>
                        </div>
                        <div className="talk-card-top">
                            <div className="talk-card-header">
                                <div className="talk-icon"><Users size={22} /></div>
                            </div>
                            <p className="cat">For Parents & Community</p>
                            <h3>Parent & Community Talk</h3>
                            <p className="talk-liner">A structured session designed to equip parents, carers and community leaders with the tools to understand, connect with, and guide the young people in their lives.</p>
                            <ul className="talk-bullets">
                                <li><span className="icon-check"><Logo size={10} /></span>Understanding teen emotional development</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Opening meaningful conversations</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Recognising warning signs early</li>
                                <li><span className="icon-check"><Logo size={10} /></span>Building trust without losing boundaries</li>
                            </ul>
                        </div>
                        <div className="talk-card-expand">
                            <h4>Learning Outcomes</h4>
                            <ul>
                                <li><span className="check"><Logo size={9} /></span>Understand how emotional systems develop in teens</li>
                                <li><span className="check"><Logo size={9} /></span>Create safe spaces for open communication</li>
                                <li><span className="check"><Logo size={9} /></span>Recognise signs of distress early</li>
                                <li><span className="check"><Logo size={9} /></span>Set boundaries with empathy and clarity</li>
                                <li><span className="check"><Logo size={9} /></span>Strengthen family and community support systems</li>
                            </ul>
                            <p className="outcome">"Parents gain practical tools to strengthen the bridge between themselves and the young people they care for."</p>
                        </div>
                        <div className="talk-card-footer" onClick={() => handleToggle(1)}>
                            <span>{expandedTalk === 1 ? 'HIDE OUTCOMES' : 'VIEW OUTCOMES'}</span>
                            <div className="talk-toggle"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Talks

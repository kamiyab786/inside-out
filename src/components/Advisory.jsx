import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Logo from './Logo'

const Advisory = forwardRef(function Advisory({ scrollTo }, ref) {
    return (
        <section className="section advisory" id="advisory" ref={ref}>
            <div className="container">
                <div className="advisory-grid">
                    <div className="reveal">
                        <span className="section-label">Advisory & Strategy</span>
                        <h2 className="section-title">Advisory for Organizations and <span className="accent">Government</span></h2>
                        <p className="advisory-body">
                            I also work as a thought partner for organizations and government teams focused on prevention. This is not enforcement work. It's a prevention lens: understanding where problems start, what drives behavior, and how to build systems and messaging that support better decisions.
                        </p>
                        <a href="#booking" className="link-arrow" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>
                            Request an Advisory Call <ArrowRight size={14} />
                        </a>
                    </div>
                    <div className="reveal reveal-delay-1">
                        <div className="advisory-list">
                            <h4 className="advisory-list-title">What We Cover</h4>
                            <ul>
                                {[
                                    'Prevention strategy and program design',
                                    'Youth engagement and messaging that lands',
                                    'Stakeholder engagement (schools, families, community)',
                                    'Cultural insight and Punjabi-language support where helpful',
                                    'Practical recommendations grounded in lived experience and accountability'
                                ].map((text, i) => (
                                    <li key={i}><span className="advisory-bullet"><Logo size={8} /></span><span>{text}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="advisory-img-wrap reveal reveal-delay-1">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                            alt="Advisory meeting discussion"
                            loading="lazy"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Advisory

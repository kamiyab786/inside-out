import { forwardRef } from 'react'
import Logo from './Logo'

const steps = [
    { num: '01', title: 'Get in Touch', desc: "Reach out via the booking form with your school or organisation details. We'll arrange an initial call to understand your needs." },
    { num: '02', title: 'Tailored Plan', desc: 'We customise the session to your audience — age group, setting, and any specific topics or concerns you want addressed.' },
    { num: '03', title: 'Delivery & Follow-Up', desc: 'The talk is delivered with full engagement. Afterwards, you receive a resource pack and optional follow-up support.' }
]

const Process = forwardRef(function Process(props, ref) {
    return (
        <section className="section process" id="process" ref={ref}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 4rem' }}>
                    <span className="section-label reveal" style={{ justifyContent: 'center' }}>How It Works</span>
                    <h2 className="section-title reveal">Simple <span className="accent">Process</span></h2>
                    <p className="section-sub reveal" style={{ margin: '0 auto' }}>From first contact to lasting impact — three straightforward steps.</p>
                </div>
                <div className="process-steps">
                    <div className="process-connector" />
                    {steps.map((s, i) => (
                        <div key={i} className={`process-step reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''}`}>
                            <div className="process-logo-wrap">
                                <div className="process-logo-ring" />
                                <Logo size={18} />
                                <span className="process-step-num">{s.num}</span>
                            </div>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Process

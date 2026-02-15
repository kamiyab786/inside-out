import { forwardRef } from 'react'

/* Hand-crafted SVG illustrations – 3D line-art style matching Balancia aesthetic */
const icons = {
    awareness: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="1.5" opacity=".3" />
            <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="1" opacity=".15" />
            <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="36" r="3" fill="currentColor" opacity=".4" />
            <path d="M40 20V14M40 66V60M20 40H14M66 40H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
            <path d="M28 28l-4-4M52 52l-4-4M52 28l4-4M28 52l-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".3" />
        </svg>
    ),
    resilience: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55C20 55 25 35 40 35C55 35 60 55 60 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".3" />
            <path d="M25 50C25 50 30 35 40 35C50 35 55 50 55 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 35V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M35 22l5-4 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
            <path d="M30 58l2-6M38 58l1-6M42 58l-1-6M50 58l-2-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".3" />
        </svg>
    ),
    communication: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="18" width="32" height="22" rx="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 40l-4 8 10-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <rect x="36" y="30" width="32" height="22" rx="6" stroke="currentColor" strokeWidth="1.5" opacity=".6" />
            <path d="M60 52l4 8-10-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity=".6" />
            <circle cx="23" cy="29" r="1.5" fill="currentColor" opacity=".5" />
            <circle cx="28" cy="29" r="1.5" fill="currentColor" opacity=".5" />
            <circle cx="33" cy="29" r="1.5" fill="currentColor" opacity=".5" />
            <path d="M44 41h16M44 45h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".3" />
        </svg>
    ),
    decision: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1" opacity=".15" />
            <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="1.5" opacity=".3" />
            <path d="M40 22V40L52 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="40" cy="40" r="3" fill="currentColor" opacity=".4" />
            <path d="M40 16v3M40 61v3M16 40h3M61 40h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
            <path d="M55 25l-2 2M25 55l-2 2M55 55l-2-2M25 25l-2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".2" />
        </svg>
    ),
    purpose: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 65V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 38l10-10 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="40" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="18" r="1.5" fill="currentColor" opacity=".5" />
            <path d="M26 50c4-2 9-3 14-3s10 1 14 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".2" />
            <path d="M22 56c5-3 11-5 18-5s13 2 18 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".12" />
        </svg>
    ),
    relationships: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="52" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 42c-8 0-14 5-14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
            <path d="M52 42c8 0 14 5 14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
            <path d="M34 40c0 0 2 6 6 6s6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M36 50v10M44 50v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".3" />
            <circle cx="26" cy="28" r="1" fill="currentColor" opacity=".4" />
            <circle cx="50" cy="28" r="1" fill="currentColor" opacity=".4" />
        </svg>
    )
}

const outcomes = [
    { icon: icons.awareness, title: 'Self-Awareness', desc: 'Students develop the ability to recognise their emotional patterns and understand what drives their behaviour.' },
    { icon: icons.resilience, title: 'Emotional Resilience', desc: 'Tools to manage anxiety, frustration and pressure — without shutting down or lashing out.' },
    { icon: icons.communication, title: 'Better Communication', desc: 'The confidence to express themselves honestly and listen with empathy in their relationships.' },
    { icon: icons.decision, title: 'Informed Decision-Making', desc: 'They learn to pause, reflect, and make choices aligned with their values — not just peer pressure.' },
    { icon: icons.purpose, title: 'Sense of Purpose', desc: "A clearer understanding of who they are and what they want — beyond social validation." },
    { icon: icons.relationships, title: 'Stronger Relationships', desc: 'Skills to navigate friendships, family dynamics and romantic relationships in a healthier way.' }
]

const Outcomes = forwardRef(function Outcomes(props, ref) {
    return (
        <section className="section outcomes" id="outcomes" ref={ref}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 4rem' }}>
                    <span className="section-label reveal" style={{ justifyContent: 'center' }}>What Students Take Away</span>
                    <h2 className="section-title reveal">Real <span className="accent">Outcomes</span></h2>
                    <p className="section-sub reveal" style={{ margin: '0 auto' }}>Lasting skills that extend far beyond the classroom into every area of life.</p>
                </div>
                <div className="grid-3">
                    {outcomes.map((o, i) => (
                        <div key={i} className={`outcome-card reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`}>
                            <div className="outcome-icon">{o.icon}</div>
                            <h4>{o.title}</h4>
                            <p>{o.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Outcomes

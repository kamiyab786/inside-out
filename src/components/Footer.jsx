import Logo from './Logo'

export default function Footer({ scrollTo }) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#hero" className="nav-logo-wrap" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
                            <div className="nav-logo-icon"><Logo size={38} /></div>
                            <span className="nav-logo-text">Inside<span className="out">Out</span></span>
                        </a>
                        <p>Empowering young people with the self-awareness and resilience tools they need — through honest talks rooted in real-life experience.</p>
                    </div>
                    <div className="footer-cols">
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                {[
                                    { id: 'context', label: 'Why It Matters' },
                                    { id: 'talks', label: 'Our Talks' },
                                    { id: 'outcomes', label: 'Outcomes' },
                                    { id: 'about', label: 'About' }
                                ].map(l => (
                                    <li key={l.id}>
                                        <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get in Touch</h4>
                            <ul>
                                <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>Book a Talk</a></li>
                                <li><a href="mailto:hello@insideoutmindset.co.uk">hello@insideoutmindset.co.uk</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-disclaimer">
                        <strong>Disclaimer</strong>
                        Inside Out Mindset is an educational awareness programme. It does not provide therapy, counselling, or clinical intervention. Content is designed for informational and educational purposes only. If you or someone you know is in crisis, please contact a qualified professional or call 116 123 (Samaritans).
                    </p>
                    <p className="footer-copyright">© {new Date().getFullYear()} Inside Out Mindset</p>
                </div>
            </div>
        </footer>
    )
}

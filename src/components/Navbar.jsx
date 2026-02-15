import Logo from './Logo'

export default function Navbar({ scrolled, scrollTo, navLinks, onMobileOpen }) {
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <a href="#hero" className="nav-logo-wrap" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
                    <div className="nav-logo-icon"><Logo size={38} /></div>
                    <span className="nav-logo-text">Inside<span className="out">Out</span></span>
                </a>
                <ul className="nav-links">
                    {navLinks.map(l => (
                        <li key={l.id}><a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a></li>
                    ))}
                    <li><a href="#booking" className="nav-cta-btn" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>Book Now</a></li>
                </ul>
                <button className="hamburger" onClick={onMobileOpen} aria-label="Open menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}

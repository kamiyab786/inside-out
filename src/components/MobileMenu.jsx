export default function MobileMenu({ open, onClose, navLinks, scrollTo }) {
    return (
        <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <button className="mobile-close" onClick={onClose} aria-label="Close menu">✕</button>
            {navLinks.map(l => (
                <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a>
            ))}
            <a href="#booking" onClick={(e) => { e.preventDefault(); scrollTo('booking') }}>Book Now</a>
        </div>
    )
}

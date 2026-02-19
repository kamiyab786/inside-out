import { forwardRef, useState, useEffect, useRef } from 'react'
import { ArrowRight, MapPin, Phone, Mail, ChevronDown, Check } from 'lucide-react'

const audienceOptions = [
    'High School Students',
    'Parents',
    'Staff / Leadership',
    'Organization / Government',
    'Others'
]

const Booking = forwardRef(function Booking(props, ref) {
    const [formStatus, setFormStatus] = useState(null)
    const [audience, setAudience] = useState(audienceOptions[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormStatus('success')
        setTimeout(() => { setFormStatus(null); e.target.reset() }, 3500)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <section className="section booking" id="booking" ref={ref}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'start' }}>
                    <div className="reveal">
                        <span className="section-label">Get Started</span>
                        <h2 className="section-title">Book a <span className="accent">Talk</span></h2>
                        <p style={{ color: 'var(--accent-3)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem', fontSize: '.95rem' }}>
                            Whether you're a school, community group, or organisation - fill in the form and we'll get back to you to arrange an initial conversation about your needs.
                        </p>

                        <div className="contact-info-grid">
                            <a href="https://maps.google.com/?q=Surrey,BC" target="_blank" rel="noreferrer">
                                <div className="contact-box">
                                    <div className="contact-box-bg" />
                                    <div className="contact-icon"><MapPin size={20} /></div>
                                    <div className="contact-content">
                                        <h4>Location</h4>
                                        <p>Surrey, BC & Lower Mainland</p>
                                    </div>
                                </div>
                            </a>
                            <a href="tel:(604) 555-0123" target="_blank" rel="noreferrer">
                                <div className="contact-box">
                                    <div className="contact-box-bg" />
                                    <div className="contact-icon"><Phone size={20} /></div>
                                    <div className="contact-content">
                                        <h4>Phone</h4>
                                        <p>(604) 555-0123</p>
                                    </div>
                                </div>
                            </a>
                            <a href="mailto:mindy@insideoutmindset.com" target="_blank" rel="noreferrer">
                                <div className="contact-box">
                                    <div className="contact-box-bg" />
                                    <div className="contact-icon"><Mail size={20} /></div>
                                    <div className="contact-content">
                                        <h4>Email</h4>
                                        <p>mindy@insideoutmindset.com</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://maps.google.com/?q=Surrey,BC" target="_blank" rel="noreferrer" className="btn-direction">
                                Get direction <div className="btn-direction-icon"><ArrowRight size={16} /></div>
                            </a>
                        </div>
                    </div>

                    <div className="reveal reveal-delay-1">
                        <div className="booking-form-wrap">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" id="name" name="name" placeholder="Full name" required autoComplete="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="you@example.com" required autoComplete="email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="org">Organisation / School</label>
                                        <input type="text" id="org" name="org" placeholder="Organisation name" autoComplete="organization" />
                                    </div>
                                    <div className="form-group" ref={dropdownRef}>
                                        <label>Audience</label>
                                        <div className={`custom-dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                            <div className="dropdown-selected">
                                                {audience}
                                                <ChevronDown size={16} className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
                                            </div>
                                            <div className="dropdown-menu">
                                                {audienceOptions.map((option) => (
                                                    <div
                                                        key={option}
                                                        className={`dropdown-item ${audience === option ? 'selected' : ''}`}
                                                        onClick={() => { setAudience(option); setIsDropdownOpen(false) }}
                                                    >
                                                        {option}
                                                        {audience === option && <Check size={14} className="check-icon" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <input type="hidden" name="audience" value={audience} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" autoComplete="tel" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" id="location" name="location" placeholder="City / Address" />
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                                    <label htmlFor="msg">Notes / Goals / Preferred Dates</label>
                                    <textarea id="msg" name="msg" placeholder="Tell us about your needs..." />
                                </div>

                                <div className="form-submit-row">
                                    <button type="submit" className={`btn-submit-pill ${formStatus === 'success' ? 'success' : ''}`}>
                                        <span>{formStatus === 'success' ? 'Sent' : 'Submit'}</span>
                                        <div className="btn-icon-circle"><ArrowRight size={18} /></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Booking

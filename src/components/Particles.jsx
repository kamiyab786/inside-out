import { useRef } from 'react'

export default function Particles({ count = 25 }) {
    const particles = useRef(
        Array.from({ length: count }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${Math.random() * 4 + 2}px`,
            delay: `${Math.random() * 8}s`,
            duration: `${Math.random() * 6 + 5}s`
        }))
    ).current

    return (
        <div className="hero-particles">
            {particles.map((p, i) => (
                <div key={i} className="particle" style={{
                    left: p.left, top: p.top, width: p.size, height: p.size,
                    animationDelay: p.delay, animationDuration: p.duration
                }} />
            ))}
        </div>
    )
}

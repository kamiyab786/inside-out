import { useState, useEffect, useRef } from 'react'

export default function AnimatedCounter({ target, suffix = '' }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    let current = 0
                    const step = Math.max(1, Math.ceil(target / 50))
                    const timer = setInterval(() => {
                        current += step
                        if (current >= target) { current = target; clearInterval(timer) }
                        setValue(current)
                    }, 30)
                    obs.unobserve(el)
                }
            },
            { threshold: 0.5 }
        )
        obs.observe(el)
        return () => obs.unobserve(el)
    }, [target])

    return <div className="stat-num" ref={ref}>{value.toLocaleString()}{suffix}</div>
}

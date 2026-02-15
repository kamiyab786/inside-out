import { useRef, useEffect } from 'react'

export default function useReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
            }),
            { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
        )
        const targets = el.querySelectorAll('.reveal')
        targets.forEach(t => obs.observe(t))
        return () => targets.forEach(t => obs.unobserve(t))
    }, [])
    return ref
}

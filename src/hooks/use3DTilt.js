import { useCallback } from 'react'

export default function use3DTilt() {
    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateX = (y - rect.height / 2) / 25
        const rotateY = (rect.width / 2 - x) / 25
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    }, [])
    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.transform = ''
    }, [])
    return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}

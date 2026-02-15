import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [hidden, setHidden] = useState(false)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const nodes = Array.from({ length: 40 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1
            }))
            let animId
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                nodes.forEach(n => {
                    n.x += n.vx; n.y += n.vy
                    if (n.x < 0 || n.x > canvas.width) n.vx *= -1
                    if (n.y < 0 || n.y > canvas.height) n.vy *= -1
                    ctx.beginPath()
                    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
                    ctx.fillStyle = 'rgba(233,255,244,0.3)'
                    ctx.fill()
                })
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x
                        const dy = nodes[i].y - nodes[j].y
                        const dist = Math.sqrt(dx * dx + dy * dy)
                        if (dist < 150) {
                            ctx.beginPath()
                            ctx.moveTo(nodes[i].x, nodes[i].y)
                            ctx.lineTo(nodes[j].x, nodes[j].y)
                            ctx.strokeStyle = `rgba(233,255,244,${0.1 * (1 - dist / 150)})`
                            ctx.lineWidth = 0.5
                            ctx.stroke()
                        }
                    }
                }
                animId = requestAnimationFrame(draw)
            }
            draw()
            return () => cancelAnimationFrame(animId)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                const next = p + Math.random() * 15 + 5
                if (next >= 100) {
                    clearInterval(interval)
                    setTimeout(() => { setHidden(true); onComplete() }, 400)
                    return 100
                }
                return next
            })
        }, 120)
        const fallback = setTimeout(() => { setHidden(true); onComplete() }, 3000)
        return () => { clearInterval(interval); clearTimeout(fallback) }
    }, [onComplete])

    return (
        <div className={`loader ${hidden ? 'hidden' : ''}`}>
            <canvas ref={canvasRef} className="loader-canvas" />
            <div className="loader-content">
                <div style={{ position: 'relative', width: 90, height: 90 }}>
                    <div className="loader-rings">
                        <div className="loader-ring" />
                        <div className="loader-ring" />
                        <div className="loader-ring" />
                    </div>
                    <div className="loader-logo">
                        <Logo size={90} />
                    </div>
                </div>
                <div className="loader-bar">
                    <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="loader-text">Inside Out Mindset</div>
                <div className="loader-sub">Preparing your experience</div>
            </div>
        </div>
    )
}

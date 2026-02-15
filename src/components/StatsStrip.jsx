import AnimatedCounter from './AnimatedCounter'

export default function StatsStrip() {
    return (
        <div className="stats-strip">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <AnimatedCounter target={50} suffix="+" />
                        <div className="stat-label">Schools Reached</div>
                    </div>
                    <div className="stat-item">
                        <AnimatedCounter target={5000} suffix="+" />
                        <div className="stat-label">Young People Impacted</div>
                    </div>
                    <div className="stat-item">
                        <AnimatedCounter target={98} suffix="%" />
                        <div className="stat-label">Positive Feedback</div>
                    </div>
                    <div className="stat-item">
                        <AnimatedCounter target={100} suffix="%" />
                        <div className="stat-label">Re‑Booking Rate</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

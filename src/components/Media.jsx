import { forwardRef } from 'react'
import { Play } from 'lucide-react'

const mediaItems = [
    { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Talk highlight reel', title: 'Talk Highlight Reel', sub: 'A glimpse into a recent school session' },
    { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Behind the process', title: 'Behind the Process', sub: 'How we tailor every session' }
]

const Media = forwardRef(function Media(props, ref) {
    return (
        <section className="section media-section" ref={ref}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 4rem' }}>
                    <span className="section-label reveal" style={{ justifyContent: 'center' }}>Media</span>
                    <h2 className="section-title reveal">See It In <span className="accent">Action</span></h2>
                </div>
                <div className="grid-2">
                    {mediaItems.map((m, i) => (
                        <div key={i} className={`media-card reveal ${i === 1 ? 'reveal-delay-1' : ''}`}>
                            <div className="media-thumb">
                                <img src={m.img} alt={m.alt} loading="lazy" width={600} height={338} />
                                <div className="overlay" />
                                <div className="play-btn"><Play size={20} /></div>
                            </div>
                            <div className="media-info">
                                <h4>{m.title}</h4>
                                <p>{m.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Media

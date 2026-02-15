import { ChevronUp } from 'lucide-react'

export default function BackToTop({ visible }) {
    return (
        <button className={`back-to-top ${visible ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top">
            <ChevronUp size={20} />
        </button>
    )
}

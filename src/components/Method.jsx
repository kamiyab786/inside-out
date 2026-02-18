import { forwardRef } from 'react'

const Method = forwardRef(function Method(props, ref) {
    return (
        <section className="section method" ref={ref}>
            <div className="container">
                <div className="reveal method-inner">
                    <span className="method-quote-icon">❝</span>
                    <p className="method-quote">
                        Inside Out Mindset is developed from real clinical training, frontline experience and the kind of honest reflection that only comes from having walked through difficulty firsthand.
                    </p>
                    <span className="method-quote-icon">❞</span>
                </div>
            </div>
        </section>
    )
})

export default Method

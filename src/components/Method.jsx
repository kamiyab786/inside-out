import { forwardRef } from 'react'

const Method = forwardRef(function Method(props, ref) {
    return (
        <section className="section method" ref={ref}>
            <div className="container">
                <div className="reveal method-inner">
                    <p className="method-quote">
                        "Inside Out Mindset is developed from <strong>real clinical training</strong>, <strong>frontline experience</strong>, and the kind of <strong>honest reflection</strong> that only comes from having walked through difficulty firsthand."
                    </p>
                </div>
            </div>
        </section>
    )
})

export default Method

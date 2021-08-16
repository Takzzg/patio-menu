import React from 'react'
import './BgOverlay.sass'

function BgOverlay(props) {
    const { children } = props
    let overlayColor = 'rgba(117, 71, 1, 0.45)'
    return (
        <div
            className="bgOverlay"
            style={{ backgroundImage: 'url(../images/bg/bg1.jpg)' }}
        >
            <div
                style={{
                    background: `linear-gradient(${overlayColor}, ${overlayColor})`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default BgOverlay

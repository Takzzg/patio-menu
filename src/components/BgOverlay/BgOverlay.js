import React from 'react'
import './BgOverlay.sass'

function BgOverlay(props) {
    const { children } = props
    return (
        <div
            className="bgOverlay"
            style={{ backgroundImage: 'url(../images/bg/bg1.jpg)' }}
        >
            <div className="overlayDiv">{children}</div>
        </div>
    )
}

export default BgOverlay

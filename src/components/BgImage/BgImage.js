import React from 'react'
import Overlay from './Overlay/Overlay.js'
import './BgImage.sass'
const stockPhoto = '../images/carrito1.jpg'

function BgImage(props) {
    const { foto, children, overlay } = props
    return (
        <div
            className="bgImage"
            style={{ backgroundImage: `url(${foto ? foto : stockPhoto})` }}
        >
            {overlay ? <Overlay>{children}</Overlay> : children}
        </div>
    )
}

export default BgImage

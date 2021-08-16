import React from 'react'
import { Overlay } from '../index'
import './BgImage.sass'

function BgImage(props) {
    const { foto, children, overlay } = props
    return (
        <div className="bgImage" style={{ backgroundImage: `url(${foto})` }}>
            {overlay ? <Overlay>{children}</Overlay> : children}
        </div>
    )
}

export default BgImage

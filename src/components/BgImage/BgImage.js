import React from 'react'
import './BgImage.scss'

function BgImage(props) {
    const { foto, children } = props
    return (
        <div className="bgImage" style={{ backgroundImage: `url(${foto})` }}>
            {children}
        </div>
    )
}

export default BgImage

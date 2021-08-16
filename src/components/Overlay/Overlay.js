import React from 'react'
import './Overlay.sass'

function Overlay(props) {
    const { children } = props
    return <div className="overlay">{children}</div>
}

export default Overlay

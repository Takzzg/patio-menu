import React from 'react'
import './MainTitle.sass'

function MainTitle(props) {
    const { text, children } = props
    return <div className="mainTitle">{text ? text : children}</div>
}

export default MainTitle

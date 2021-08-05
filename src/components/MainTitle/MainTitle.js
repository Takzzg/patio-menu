import React from 'react'
import './MainTitle.scss'

function MainTitle(props) {
    const { text } = props
    return <div className="mainTitle">{text}</div>
}

export default MainTitle

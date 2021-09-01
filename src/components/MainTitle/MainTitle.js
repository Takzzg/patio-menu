import React from 'react'
import './MainTitle.sass'

function MainTitle(props) {
    const { children } = props
    return <div className="mainTitle">{children}</div>
}

export default MainTitle

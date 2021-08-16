import React from 'react'
import './SubTitle.sass'

function SubTitle(props) {
    const { text } = props
    return <div className="subTitle">{text}</div>
}

export default SubTitle

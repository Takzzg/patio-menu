import React from 'react'
import './SubTitle.sass'

function SubTitle(props) {
    const { text, children } = props
    return <div className="subTitle">{text ? text : children}</div>
}

export default SubTitle

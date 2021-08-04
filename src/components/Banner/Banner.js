import React from 'react'
import './Banner.scss'

function Banner(props) {
    const { foto, nombre, desc } = props

    return (
        <div className="banner" style={{ backgroundImage: `url(${foto})` }}>
            <div className="overlay">
                <div className="nombre">{nombre}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'
import { BgImage } from '../index'
import './Banner.sass'

function Banner(props) {
    const { foto, nombre, desc } = props

    return (
        <div className="banner">
            <BgImage foto={foto} overlay>
                <div className="infoContainer">
                    <div className="nombre">{nombre}</div>
                    <div className="desc">{desc}</div>
                </div>
            </BgImage>
        </div>
    )
}

export default Banner

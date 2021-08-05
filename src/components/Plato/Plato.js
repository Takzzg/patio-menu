import React from 'react'
import { BgImage } from '../index'
import './Plato.scss'

function Plato(props) {
    const { nombre, foto, desc, precio } = props.plato
    return (
        <div className="plato">
            <div className="infoContainer">
                <div className="nombre">{nombre}</div>
                <div className="desc">{desc}</div>
                <div className="precio">{precio}</div>
            </div>
            <BgImage foto={foto} />
        </div>
    )
}

export default Plato

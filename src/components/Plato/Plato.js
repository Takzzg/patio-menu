import React from 'react'
import './Plato.scss'

function Plato(props) {
    const { nombre, foto, desc, precio } = props.plato
    return (
        <div className="plato">
            <div className="nombre">{nombre}</div>
            <img src={foto} alt={`foto plato ${nombre}`} />
            <div className="desc">{desc}</div>
            <div className="precio">{precio}</div>
        </div>
    )
}

export default Plato

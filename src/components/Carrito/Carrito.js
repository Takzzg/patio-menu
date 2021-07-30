import React from 'react'
import './Carrito.scss'

function Carrito(props) {
    const { nombre, foto, desc } = props.carr
    return (
        <div className="carrito">
            <img src={foto} alt={`foto de ${nombre}`} />
            <h1>{nombre}</h1>
            <h3>{desc}</h3>
        </div>
    )
}

export default Carrito

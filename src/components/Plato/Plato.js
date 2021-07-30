import React from 'react'
import './Plato.scss'

function Plato(props) {
    const { nombre, foto } = props.plato
    return (
        <div className="contenedor">
            {nombre}
            <img src={foto} alt={`foto plato ${nombre}`} />
        </div>
    )
}

export default Plato

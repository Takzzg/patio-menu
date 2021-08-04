import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './Carrito.scss'

function Carrito(props) {
    const { nombre, foto, desc } = props.carr
    return (
        <div className="carrito">
            <img src={foto} alt={`foto de ${nombre}`} />
            <div className="grid">
                {nombre}
                {desc}
                <NavigateNextIcon />
            </div>
        </div>
    )
}

export default Carrito

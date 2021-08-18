import React from 'react'
import { BgImage } from '../index'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './Carrito.sass'

function Carrito(props) {
    const { nombre, foto, desc } = props.carr
    return (
        <div className="carrito">
            <BgImage foto={foto} overlay>
                <div className="grid">
                    <div className="nombre">{nombre}</div>
                    <NavigateNextIcon className="icon" />
                    <div className="desc">{desc}</div>
                </div>
            </BgImage>
        </div>
    )
}

export default Carrito

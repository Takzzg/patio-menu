import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Link } from 'react-router-dom'
import { BgImage } from '../index'
import './Carrito.sass'
import IndexCarritos from '../../dataCarritos/index.js'

function Carrito(props) {
    const { carrId, noDesc, onClick } = props
    const { nombre, foto, desc } = IndexCarritos[carrId]

    return (
        <Link
            onClick={onClick}
            className="carrito"
            key={carrId}
            to={`/carritos/${carrId}`}
        >
            <BgImage foto={foto} overlay>
                <div className="grid">
                    <div className="nombre">{nombre}</div>
                    <NavigateNextIcon className="icon" />
                    {noDesc ? null : <div className="desc">{desc}</div>}
                </div>
            </BgImage>
        </Link>
    )
}

export default Carrito

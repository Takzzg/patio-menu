import React from 'react'
import { Link } from 'react-router-dom'
import dataCarritos from '../dataCarritos'
import { Carrito } from '../components'
import './Carritos.sass'

function Carritos() {
    return (
        <div className="contenedor-carritos">
            {dataCarritos.map((carr) => (
                <Link key={carr.id} to={`/carritos/${carr.nombre}`}>
                    <Carrito carr={carr} />
                </Link>
            ))}
        </div>
    )
}

export default Carritos

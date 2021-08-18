import React from 'react'
import { Link } from 'react-router-dom'
import dataCarritos from '../dataCarritos'
import { Carrito, Category } from '../components'
import './Carritos.sass'

function Carritos() {
    return (
        <div className="contenedor-carritos">
            <Category nombre="Cerveza" />
            {dataCarritos.map((carr) =>
                carr.cerveceria ? (
                    <Link key={carr.id} to={`/carritos/${carr.nombre}`}>
                        <Carrito carr={carr} />
                    </Link>
                ) : null
            )}
            <Category nombre="Comidas" />
            {dataCarritos.map((carr) =>
                !carr.cerveceria ? (
                    <Link key={carr.id} to={`/carritos/${carr.nombre}`}>
                        <Carrito carr={carr} />
                    </Link>
                ) : null
            )}
        </div>
    )
}

export default Carritos

import React from 'react'
import { Link } from 'react-router-dom'
import dataCarritos from '../dataCarritos'
import { Carrito, Category } from '../components'
import './Carritos.sass'

const sortedCarritos = dataCarritos.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre)
})
const cerveceros = sortedCarritos
    .filter((carr) => {
        return carr.cerveceria
    })
    .map((carr) => (
        <Link key={carr.id} to={`/carritos/${carr.nombre}`}>
            <Carrito carr={carr} />
        </Link>
    ))
const comida = sortedCarritos
    .filter((carr) => {
        return !carr.cerveceria
    })
    .map((carr) => (
        <Link key={carr.id} to={`/carritos/${carr.nombre}`}>
            <Carrito carr={carr} />
        </Link>
    ))

function Carritos() {
    return (
        <div className="contenedor-carritos">
            <Category nombre="Cerveza" />
            {cerveceros}
            <Category nombre="Comidas" />
            {comida}
        </div>
    )
}

export default Carritos

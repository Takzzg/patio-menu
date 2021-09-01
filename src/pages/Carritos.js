import React from 'react'
import { Carrito, Category } from '../components'
import './Carritos.sass'
import { filterIds } from '../dataCarritos/index.js'

const bebidas = filterIds('nombre', 'bebidas')
const cerveceros = filterIds('cerveceria', true)
const comida = filterIds('cerveceria', undefined)
const mapCarritos = (carrs) =>
    carrs.map((carrId) => <Carrito key={carrId} carrId={carrId} />)

function Carritos() {
    return (
        <div className="contenedor-carritos">
            <Category nombre="Bebidas" />
            {mapCarritos(bebidas)}
            <Category nombre="Cerveza" />
            {mapCarritos(cerveceros)}
            <Category nombre="Comidas" />
            {mapCarritos(comida)}
        </div>
    )
}

export default Carritos

import React from 'react'
import { Link } from 'react-router-dom'

const dataCarritos = [
    {
        nombre: 'El Bululu',
        foto: '',
        desc: 'Descripcion El Bululu',
    },
    {
        nombre: 'Buena Faena',
        foto: '',
        desc: 'Descripcion Buena Faena',
    },
]

function Carritos() {
    return (
        <>
            {dataCarritos.map((carr) => (
                <Link to={`/carritos/${carr.nombre}`}>{carr.nombre}</Link>
            ))}
        </>
    )
}

export default Carritos

import React from 'react'
import { Link } from 'react-router-dom'
// import dataCarritos from '../dataCarritos'

const dataCarritos = [
    {
        nombre: 'El Bululu',
        foto: '',
        desc: 'Descripcion El Bululu',
        carta: [
            {
                id: 0,
                nombre: 'Plato 0',
                desc: 'Descripcion plato 0',
                precio: '$$$$$$',
            },
            {
                id: 2,
                nombre: 'Plato 2',
                desc: 'Descripcion plato 2',
                precio: '$$$$$$',
            },
            {
                id: 3,
                nombre: 'Plato 3',
                desc: 'Descripcion plato 3',
                precio: '$$$$$$',
            },
            {
                id: 4,
                nombre: 'Plato 4',
                desc: 'Descripcion plato 4',
                precio: '$$$$$$',
            },
        ],
    },
    {
        nombre: 'Buena Faena',
        foto: '',
        desc: 'Descripcion Buena Faena',
        carta: [
            {
                id: 0,
                nombre: 'Plato 0',
                desc: 'Descripcion plato 0',
                precio: '$$$$$$',
            },
            {
                id: 2,
                nombre: 'Plato 2',
                desc: 'Descripcion plato 2',
                precio: '$$$$$$',
            },
            {
                id: 3,
                nombre: 'Plato 3',
                desc: 'Descripcion plato 3',
                precio: '$$$$$$',
            },
            {
                id: 4,
                nombre: 'Plato 4',
                desc: 'Descripcion plato 4',
                precio: '$$$$$$',
            },
        ],
    },
]

function Carritos() {
    return (
        <>
            {dataCarritos.map((carr) => (
                <Link key={carr.nombre} to={`/carritos/${carr.nombre}`}>
                    {carr.nombre}
                </Link>
            ))}
        </>
    )
}

export default Carritos

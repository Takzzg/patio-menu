import React from 'react'
import dataCarritos from '../dataCarritos'

function Carta(props) {
    const { match } = props
    const { nombre: nombreP } = match.params

    const carrito = dataCarritos.find((carr) => carr.nombre === nombreP)
    const { id, nombre, foto, desc, carta } = carrito

    return (
        <>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>{foto}</p>
            <p>{desc}</p>
            <pre>{JSON.stringify(carta, null, 2)}</pre>
        </>
    )
}

export default Carta

import React from 'react'
import dataCarritos from '../dataCarritos'
import { Category, Plato } from '../components'

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
            <>
                {Object.keys(carta).map((cat) => (
                    <Category key={cat} nombre={cat}>
                        {carta[cat].map((plato) => {
                            return <Plato key={plato.id} plato={plato} />
                        })}
                    </Category>
                ))}
            </>
            <pre>{JSON.stringify(carta, null, 2)}</pre>
        </>
    )
}

export default Carta

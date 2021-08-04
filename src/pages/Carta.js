import React from 'react'
import dataCarritos from '../dataCarritos'
import { Banner, Category, Plato } from '../components'

function Carta(props) {
    const { match } = props
    const { nombre: nombreP } = match.params

    const carrito = dataCarritos.find((carr) => carr.nombre === nombreP)
    const { nombre, foto, desc, carta } = carrito

    return (
        <div className="carta">
            <Banner nombre={nombre} desc={desc} foto={foto} />
            <>
                {Object.keys(carta).map((cat) => (
                    <Category key={cat} nombre={cat}>
                        {carta[cat].map((plato) => {
                            return <Plato key={plato.id} plato={plato} />
                        })}
                    </Category>
                ))}
            </>
        </div>
    )
}

export default Carta

import React from 'react'

function Carta(props) {
    const { match } = props
    const { nombre, foto, desc, carta } = match.params
    return (
        <>
            {/* {nombre} */}
            <img src={foto} alt={`Foto de ${nombre}`} />
            <h1>{nombre}</h1>
            <h3>{desc}</h3>
            {/* {carta.map((plato) => (
                <p>{carta.nombre}</p>
            ))} */}
        </>
    )
}

export default Carta

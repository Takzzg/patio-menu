import React from 'react'

function Carta(props) {
    const { match } = props
    console.log(match)
    const { nombre } = match.params
    return <div>Carta de {nombre}</div>
}

export default Carta

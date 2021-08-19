import React from 'react'
import dataCarritos from '../dataCarritos'
import {
    Banner,
    Category,
    Plato,
    SocialContainer,
    SearchBar,
} from '../components'

function Carta(props) {
    const { match } = props
    const { nombre: nombreP } = match.params

    const carrito = dataCarritos.find((carr) => carr.nombre === nombreP)
    const { nombre, foto, desc, userInsta, idFace, numWpp, carta } = carrito

    return (
        <div className="carta">
            <Banner nombre={nombre} desc={desc} foto={foto} />
            <SocialContainer
                userInsta={userInsta}
                idFace={idFace}
                numWpp={numWpp}
            />
            <SearchBar carr={carrito}>
                {Object.keys(carta).map((cat) => (
                    <Category key={cat} nombre={cat}>
                        {carta[cat].map((plato) => {
                            return (
                                <Plato
                                    key={`${cat}-${plato.id}`}
                                    plato={plato}
                                />
                            )
                        })}
                    </Category>
                ))}
            </SearchBar>
        </div>
    )
}

export default Carta

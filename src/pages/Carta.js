import React from 'react'
import IndexCarritos from '../dataCarritos/index'
import { Banner, Category, Plato, SocialContainer } from '../components'

function Carta(props) {
    const { nombre: carrId } = props.match.params
    const { nombre, foto, desc, userInsta, idFace, numWpp, carta } =
        IndexCarritos[carrId]

    return (
        <div className="carta">
            <Banner nombre={nombre} desc={desc} foto={foto} />
            {userInsta || idFace || numWpp ? (
                <SocialContainer
                    userInsta={userInsta}
                    idFace={idFace}
                    numWpp={numWpp}
                />
            ) : null}
            {Object.keys(carta).map((cat) => (
                <Category key={cat} nombre={cat}>
                    {carta[cat].map((plato) => {
                        return (
                            <Plato key={`${cat}-${plato.id}`} plato={plato} />
                        )
                    })}
                </Category>
            ))}
        </div>
    )
}

export default Carta

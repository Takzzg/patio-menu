import React from 'react'
import { SocialLink } from '../index'
import './SocialContainer.sass'

function SocialContainer(props) {
    const { userInsta, idFace, numWpp } = props
    return (
        <div className="socialContainer">
            {userInsta ? <SocialLink insta link={userInsta} /> : null}
            {idFace ? <SocialLink face link={idFace} /> : null}
            {numWpp
                ? numWpp.map((num) => <SocialLink wapp key={num} link={num} />)
                : null}
        </div>
    )
}

export default SocialContainer

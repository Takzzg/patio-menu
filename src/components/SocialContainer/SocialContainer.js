import React from 'react'
import { SocialLink } from '../index'
import './SocialContainer.sass'

function SocialContainer(props) {
    const { userInsta, idFace, numWpp } = props

    return userInsta || idFace || numWpp ? (
        <div
            className="socialContainer"
            style={{ backgroundImage: 'url(../images/wppBg.jpg)' }}
        >
            {userInsta ? <SocialLink insta link={userInsta} /> : null}
            {idFace ? <SocialLink face link={idFace} /> : null}
            {numWpp
                ? numWpp.map((num) => <SocialLink wapp key={num} link={num} />)
                : null}
        </div>
    ) : null
}

export default SocialContainer

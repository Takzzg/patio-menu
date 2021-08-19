import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import './SocialLink.sass'

function SocialLink(props) {
    const { insta, face, wapp, link, tripAd } = props
    return (
        <div className="socialLink">
            {insta ? (
                <a
                    className="icon"
                    href={`instagram://user?username=${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon fontSize="inherit" className="icono" />
                </a>
            ) : null}

            {face ? (
                <a
                    className="icon"
                    href={`fb://profile/${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon fontSize="inherit" className="icono" />
                </a>
            ) : null}

            {wapp ? (
                <a
                    className="icon"
                    href={`whatsapp://send?phone=${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsAppIcon fontSize="inherit" className="icono" />
                </a>
            ) : null}

            {tripAd ? (
                <a
                    className="tripad"
                    href="https://www.tripadvisor.com.ar/Restaurant_Review-g23230296-d23594097-Reviews-El_Patio_Food_Beer_Trucks-Villa_De_Merlo_Province_of_San_Luis_Cuyo.html?m=19905"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="../images/talwhite.png"
                        alt="logo trip advisor"
                        className="logo"
                    />
                </a>
            ) : null}
        </div>
    )
}

export default SocialLink

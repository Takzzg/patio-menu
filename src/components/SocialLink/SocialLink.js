import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import './SocialLink.scss'

function SocialLink(props) {
    const { insta, face, wapp } = props
    return (
        <div className="socialLink">
            {insta ? (
                <a
                    href="https://www.instagram.com/elpatiodemerlo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`,
                    }}
                >
                    <InstagramIcon fontSize="inherit" />
                    <div className="nombre">@elpatiodemerlo</div>
                </a>
            ) : null}
            {face ? (
                <a
                    href="https://www.facebook.com/ElPatioMerlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: `#3b5998`, color: 'white' }}
                >
                    <FacebookIcon fontSize="inherit" />
                    <div className="nombre">El Patio - Food & Beer Trucks</div>
                </a>
            ) : null}
            {wapp ? (
                <a
                    href="whatsapp://send?phone=5492664507652"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: `#25D366`, color: 'white' }}
                >
                    <WhatsAppIcon fontSize="inherit" />
                    <div className="nombre">+549 266 450-7652</div>
                </a>
            ) : null}
        </div>
    )
}

export default SocialLink

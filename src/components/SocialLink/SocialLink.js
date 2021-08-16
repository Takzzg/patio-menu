import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import './SocialLink.scss'

function SocialLink(props) {
    const { insta, face, wapp, link } = props
    return (
        <div className="socialLink">
            {insta ? (
                <a
                    href={`instagram://user?username=${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`,
                    }}
                >
                    <InstagramIcon fontSize="inherit" />
                </a>
            ) : null}

            {face ? (
                <a
                    href={`fb://profile/${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: `#3b5998`, color: 'white' }}
                >
                    <FacebookIcon fontSize="inherit" />
                </a>
            ) : null}

            {wapp ? (
                <a
                    href={`whatsapp://send?phone=${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: `#25D366`, color: 'white' }}
                >
                    <WhatsAppIcon fontSize="inherit" />
                </a>
            ) : null}
        </div>
    )
}

export default SocialLink

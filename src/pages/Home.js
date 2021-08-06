import React from 'react'
import { MainTitle, SubTitle, SocialLink } from '../components'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <MainTitle text="Seguinos en nuestras redes sociales" />
            <SocialLink insta />
            <SocialLink face />
            <SubTitle text="O Contactate con nosotros por WhatsApp:" />
            <SocialLink wapp />
            <MainTitle text="¿ Donde Encontrarnos ?" />
            <SubTitle text="Podes encontrarnos en: Av. del Sol 1080 (esquina calle Carlos Pellegrini), Merlo, San Luis." />
            <iframe
                title="map"
                className="map"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP-14xnjn0pURqmo5f1cbcA4&key=${process.env.REACT_APP_GMAPS_API_KEY}`}
            />
        </div>
    )
}

export default Home

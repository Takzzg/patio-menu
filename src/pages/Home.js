import React from 'react'
import { MainTitle, SubTitle, SocialContainer, Banner } from '../components'
import dataPatio from '../dataPatio'
import './Home.sass'

function Home() {
    return (
        <div className="home">
            <Banner
                foto={'../images/patio/portada1.jpg'}
                nombre="El Patio"
                desc="Food & Beer Trucks"
            />
            <p>
                Veni a visitar el patio de Merlo, sobre Av. del Sol, y disfruta
                de un espacio al aire libre donde podes encontrar variedad de
                comidas, con opciones veganas, vegetarianas y apto celiaco.
                Ademas somos pet-friendly
            </p>
            <p>Insertar galeria aqui</p>
            <MainTitle text="Seguinos en nuestras redes sociales" />
            <SocialContainer
                userInsta={dataPatio.userInsta}
                idFace={dataPatio.idFace}
                numWpp={dataPatio.numWpp}
            />
            <MainTitle text="¿ Donde Encontrarnos ?" />
            <SubTitle text="Podes encontrarnos en: Av. del Sol 1043 (esquina calle Carlos Pellegrini), Merlo, San Luis." />
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

import React from 'react'
import {
    MainTitle,
    SubTitle,
    SocialContainer,
    Banner,
    Category,
    MyCarousel,
} from '../components'
import Patio from '../dataCarritos/Patio'
import './Home.sass'

function Home() {
    return (
        <div className="home">
            <Banner
                foto={'../images/patio/portada1.jpg'}
                nombre="El Patio"
                desc="Food & Beer Trucks"
            />
            <MainTitle>
                Vení a visitar los mejores Food Trucks de Merlo, en un sólo
                lugar!
            </MainTitle>
            <SubTitle lights table>
                <Category nombre="El Patio te ofrece" />
                <br />
                <br />
                <ul>
                    <li>
                        Variedad de comidas, que te trasladan a diferentes
                        culturas gastronómicas como la Venezolana, Mexicana,
                        Italiana, etc... <br />
                        Con opciones veganas, vegetarianas y apto celíaco.
                    </li>
                    <li>
                        Los mejores tragos y cervezas artesanales elaboradas
                        localmente por nuestros feriantes.
                    </li>
                    <li>
                        Y los mas deliciosos postres caseros para que tengas una
                        experiencia completa y no te quedes con las ganas!
                    </li>
                </ul>
                El espacio cuenta con la mejor iluminación y musicalización,
                además de la buena onda de los feriantes para que disfrutes de
                un momento al aire libre con tu familia, amigos y hasta tus
                mascotas!
            </SubTitle>
            <MyCarousel />
            <MainTitle text="Seguinos en nuestras redes sociales" />
            <SocialContainer
                userInsta={Patio.userInsta}
                idFace={Patio.idFace}
                numWpp={Patio.numWpp}
                tripAd
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

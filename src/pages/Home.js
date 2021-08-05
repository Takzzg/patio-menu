import React from 'react'
import InstagramFeed from 'react-ig-feed'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <div className="mapTitle">¿ Donde Encontrarnos ?</div>
            <iframe
                title="map"
                className="map"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP-14xnjn0pURqmo5f1cbcA4&key=${process.env.REACT_APP_GMAPS_API_KEY}`}
            />
            <InstagramFeed
                token={process.env.REACT_APP_INSTA_TOKEN}
                counter="6"
            />
        </div>
    )
}

export default Home

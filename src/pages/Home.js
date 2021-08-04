import React from 'react'

function Home() {
    return (
        <div>
            <iframe
                title="map"
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP-14xnjn0pURqmo5f1cbcA4&key=AIzaSyC9RNkKqT9TEqFLvN5xsmV4Iy9zQ-HAL94"
            />
        </div>
    )
}

export default Home

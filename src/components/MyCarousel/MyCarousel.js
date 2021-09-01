import React from 'react'
import Carousel, {
    arrowsPlugin,
    autoplayPlugin,
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import './MyCarousel.sass'

function MyCarousel() {
    return (
        <Carousel
            className="carousel"
            draggable={false}
            animationSpeed={1000}
            plugins={[
                {
                    resolve: arrowsPlugin,
                    options: {
                        arrowLeft: (
                            <button>
                                <KeyboardArrowLeftIcon className="arrow" />
                            </button>
                        ),
                        arrowRight: (
                            <button>
                                <KeyboardArrowRightIcon className="arrow" />
                            </button>
                        ),
                        addArrowClickHandler: true,
                    },
                },
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 4000,
                    },
                },
                'infinite',
            ]}
        >
            <img src="../images/carousel/carousel1.jpg" alt="carousel item 1" />
            <img src="../images/carousel/carousel2.jpg" alt="carousel item 2" />
            <img src="../images/carousel/carousel3.jpg" alt="carousel item 3" />
        </Carousel>
    )
}

export default MyCarousel

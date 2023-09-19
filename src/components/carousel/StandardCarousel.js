import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function StandardCarousel({data}) {
    return (
        <Carousel autoPlay={true} interval="3000">
            {data.map((item, index) => (            
                <div key={index}>
                    <img src={item.image} alt={item.imageAlt} />
                    <p className="legend">Legend 1</p>
                </div>
                ))
            }

        </Carousel>
    );
}

export default StandardCarousel

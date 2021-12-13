import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroBanner.css'
// Slider Data
import { slides } from './bannerData';

const HeroBanner = () => {
    return (
        <Carousel fade 
        indicators={false} 
        controls={false} 
        interval={3000}
        pause={false}
        >
            {slides.map(item => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100 banner__img"
                        src={item.image}
                        alt={item.title}
                    />
                    <div className='d-flex justify-content-center align-items-center h-100 banner__caption'>
                        <div>
                            <h1 className='banner__title'>{item.title}</h1>
                            <p className='banner__subtitle'>{item.subtitle}</p>
                        </div>
                    </div>
                </Carousel.Item>
            ))}

        </Carousel>
    );
};

export default HeroBanner;

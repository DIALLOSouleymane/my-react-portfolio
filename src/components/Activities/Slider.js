import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

export default function Slider({slides}) {
  return (
    <div>
        <Carousel className="container-fluid">
            {slides.map((slide) => (
                <Carousel.Item className='image-container' key={slide.id}>
                    <img
                    className="d-block w-100"
                    src={slide.imageUrl}
                    alt=""
                    />
                    <Carousel.Caption>
                    <h3>{slide.titre}</h3>
                    <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
  )
}

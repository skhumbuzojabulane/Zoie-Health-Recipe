import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/global.css';

import image11 from '../images/img-1.jpg';
import image22 from '../images/img-2.jpg';
import image33 from '../images/img-3.jpg';

export default function App() {
  return (
    <Carousel showIndicators showThumbs={false} emulateTouch infiniteLoop>
      <div>
        <img src={image33} alt="Fruits and Vegies" />
        <p className="legend">First slide label</p>
      </div>
      <div>
        <img src={image22} alt="Kitchin Baking" />
        <p className="legend">Second slide label</p>
      </div>
      <div>
        <img src={image11} alt="Baking" />
        <p className="legend">Third slide label</p>
      </div>
    </Carousel>
  );
}

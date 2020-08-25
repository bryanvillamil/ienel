import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Img from '../Img';

import { CarouselContent } from './styledComponents';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Carousel = ({ carousel }) => (
  <CarouselContent>
    <Slider {...settings}>
      {carousel.map(item => (
        <div key={item.id}>
          <Img src={item.image} alt={`image-${item.id}`} />
        </div>
      ))}
    </Slider>
  </CarouselContent>
);

Carousel.propTypes = {
  carousel: PropTypes.array,
};

export default Carousel;

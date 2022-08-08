import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import { SLIDER_ITEMS } from './data';

import Layout from '../../layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });
  const sliderRef = useRef();

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: true,
    autoplay: false,
    speed: 200,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Layout title="Projects" id="Projects" bottomLine={false}>
      <p>A few examples projects in which I participated or I have made.</p>
      <div ref={wrapperRef} className="projects-wrapper">
        <div style={{ width: window.innerWidth }}>
          <Slider ref={sliderRef} {...settings}>
            {SLIDER_ITEMS.map(({ title, image }, index) => (
              <div key={title + index} className="slider-item">
                <div className="slider-item-image" role="presentation">
                  <img src={image} alt={title} />
                </div>
                <div className="slider-item-title">
                  <h6>{title}</h6>
                  <small>My own web application created in React.js</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

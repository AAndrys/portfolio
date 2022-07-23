import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import { SLIDER_ITEMS } from './data';

import Layout from '../../layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Technologies = () => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <Layout title="Technologies" id="Technologies">
      <div ref={wrapperRef} className="technologies-wrapper">
        <div style={{ width: document.documentElement.clientWidth - 52 }}>
          <Slider {...settings}>
            {SLIDER_ITEMS.map(({ title, image }, index) => (
              <div key={title + index} className="slider-item">
                <div className="slider-item-image" role="presentation">
                  {image()}
                </div>
                <div className="slider-item-title">
                  <h4>{title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};

export default Technologies;

import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import { SLIDER_ITEMS } from './data';

import Layout from '../../layout';

import useResizeCount from '../../../hooks/useResizeCount';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Technologies = () => {
  const [wrapperRef] = useInView({
    threshold: 0.1
  });

  const sliderRef = useRef();
  const { resizeCount } = useResizeCount();

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
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
    <Layout title="Technologies" id="Technologies" bottomLine={false}>
      <p>
        Technologies that I have learned to a varying degree or that I have had contact with in any
        projects.
      </p>
      <div ref={wrapperRef} className="technologies-wrapper">
        <div key={`${resizeCount}`} style={{ width: window.innerWidth }}>
          <Slider ref={sliderRef} {...settings}>
            {SLIDER_ITEMS.map(({ title, image }, index) => (
              <div key={title + index} className="slider-item">
                <div className="slider-item-image" role="presentation">
                  {image()}
                </div>
                <div className="slider-item-title">
                  <h6>{title}</h6>
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

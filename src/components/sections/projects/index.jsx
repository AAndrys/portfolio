import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import { SLIDER_ITEMS } from './data';

import Layout from '../../layout';
import Popup from '../../popup';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupItemIndex, setPopupItemIndex] = useState(0);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

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
            {SLIDER_ITEMS.map(({ title, description, image }, index) => (
              <div
                key={title + index}
                className="slider-item"
                onMouseDown={() => setIsMouseDown(true)}
                onMouseMove={() => isMouseDown && setIsMouseMove(true)}
                onClick={() => {
                  setIsMouseDown(false);
                  setIsMouseMove(false);
                  !isMouseMove && (setPopupItemIndex(index), setIsPopupOpen(true));
                }}
              >
                <div className="slider-item-image" role="presentation">
                  <img src={image} alt={title} />
                </div>
                <div className="slider-item-title">
                  <h6>{title}</h6>
                  <small>{description}</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        itemData={SLIDER_ITEMS[popupItemIndex]}
        onExitClick={() => setIsPopupOpen(false)}
      />
    </Layout>
  );
};

export default Projects;

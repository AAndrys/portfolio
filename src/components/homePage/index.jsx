import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderTitle from './headerTitle';
import Face from '../../assets/images/background/twarz_black.png';

const HomePage = ({ startAnimationEnd, endAnimation, setEndAnimation }) => {
  const [firstAnimationEnd, setFirstAnimationEnd] = useState(false);

  useEffect(() => {
    if (document.querySelector('.face-image'))
      gsap.fromTo('.face-image', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 2 });
    if (document.querySelector('.home-page-profile'))
      gsap.fromTo(
        '.home-page-profile',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2 }
      );
    if (endAnimation) {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [endAnimation]);

  if (!endAnimation) {
    return (
      <div className="home-page-container" id="Home">
        <div className="home-page-text-content">
          {startAnimationEnd && (
            <HeaderTitle
              text="MY NAME IS"
              animationEnd={() => setFirstAnimationEnd(true)}
              displayAnimation={firstAnimationEnd}
            />
          )}
          {firstAnimationEnd && (
            <HeaderTitle
              text="ADAM ANDRYSIAK"
              animationEnd={() => setEndAnimation(true)}
              displayAnimation={endAnimation}
            />
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="home-page-container" id="Home">
      <div className="home-page-main-content">
        <div className="home-page-profile">
          <h1>ADAM ANDRYSIAK</h1>
          <h6>JavaScript Developer</h6>
        </div>
        <div className="home-page-profile-info" />
      </div>
      <div className="home-page-image-container">
        <img className="face-image" src={Face} alt="face" />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  startAnimationEnd: PropTypes.bool
};

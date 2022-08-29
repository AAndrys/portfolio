import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const StartScreen = ({ animationEnd }) => {
  const [startAnimation, setStartAnimation] = useState(true);
  const [onEndAnimation, setOnEndAnimation] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.start-component-container',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 3 }
    );
  }, []);

  const stylesObject = {
    display: onEndAnimation ? 'none' : 'flex'
  };

  const handleStartButton = () => {
    setStartAnimation(false);
  };

  const handleEndAnimation = () => {
    setOnEndAnimation(true);
    animationEnd();
  };

  return (
    <div
      className={
        startAnimation ? 'start-screen-container' : 'start-screen-container animated-opacity'
      }
      style={stylesObject}
      onAnimationEnd={handleEndAnimation}
    >
      <div className="start-component-container">
        <h1 className="start-screen-text">
          WELCOME TO MY WEBSITE
          <i className="animated-dot"> .</i>
        </h1>
        <p className="start-screen-text" onClick={handleStartButton} onKeyDown={handleStartButton}>
          START
        </p>
      </div>
    </div>
  );
};

export default StartScreen;

StartScreen.propTypes = {
  animationEnd: PropTypes.func
};

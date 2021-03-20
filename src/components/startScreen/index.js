import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const StartScreen = ({ animationEnd, vantaLoaded }) => {
  const [startAnimation, setStartAnimation] = useState(true);
  const [onEndAnimation, setOnEndAnimation] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".start-component-container",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 3 }
    );
  }, [])

  const stylesObject = {
    display: onEndAnimation ? "none" : "flex",
  };

  const handleStartButton = () => {
    setStartAnimation(false);
  };

  const handleEndAnimation = () => {
    setOnEndAnimation(true);
    animationEnd();
  };

  if (!vantaLoaded) {
    return (
      <div className="start-screen-container">
        <div className="start-component-container">
          <h1>
            Loading
            <i className="animated-dot"> ...</i>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        startAnimation
          ? "start-screen-container"
          : "start-screen-container animated-opacity"
      }
      style={stylesObject}
      onAnimationEnd={handleEndAnimation}
    >
      <div className="start-component-container">
        <h1 className="start-screen-text">
          WELCOME TO MY WEBSITE
          <i className="animated-dot"> .</i>
        </h1>
        <p className="start-screen-text" onClick={handleStartButton}>
          START
        </p>
      </div>
    </div>
  );
};

export default StartScreen;

StartScreen.propTypes = {
  animationEnd: PropTypes.func,
  vantaLoaded: PropTypes.bool,
};

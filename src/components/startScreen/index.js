import React, { useState } from "react";
import PropTypes from "prop-types";

const StartScreen = ({ animationEnd, vantaLoaded }) => {
  const [startAnimation, setStartAnimation] = useState(true);
  const [onEndAnimation, setOnEndAnimation] = useState(false);

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
        <h1>
          WELCOME TO MY WEBSITE
          <i className="animated-dot"> .</i>
        </h1>
        <p onClick={handleStartButton}>START</p>
      </div>
    </div>
  );
};

export default StartScreen;

StartScreen.propTypes = {
  animationEnd: PropTypes.func,
  vantaLoaded: PropTypes.bool,
};

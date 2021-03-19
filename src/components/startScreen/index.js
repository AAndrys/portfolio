import React, { useState } from "react";

const StartScreen = () => {
  const [startAnimation, setStartAnimation] = useState(true);
  const [onEndAnimation, setOnEndAnimation] = useState(false);

  const stylesObject = {
    display: onEndAnimation ? "none" : "flex",
  };

  const handleStartButton = () => {
    setStartAnimation(false);
  };

  return (
    <div
      className={
        startAnimation
          ? "start-screen-container"
          : "start-screen-container animated-opacity"
      }
      style={stylesObject}
      onAnimationEnd={() => setOnEndAnimation(true)}
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

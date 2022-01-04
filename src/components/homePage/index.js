import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderTitle from "./headerTitle";
import Face from "../../assets/images/background/twarz_black.png";
import { gsap } from "gsap";

const HomePage = ({ startAnimationEnd }) => {
  const [firstAnimationEnd, setFirstAnimationEnd] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".face-image",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2 }
    );
    gsap.fromTo(
      ".home-page-profile",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2 }
    );
  }, [endAnimation]);

  if (!endAnimation) {
    return (
      <div className="home-page-container">
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
    <div className="home-page-container">
      <div className="home-page-main-content">
        <div className="home-page-profile">
          <h1>ADAM ANDRYSIAK</h1>
          <p>JavaScript Developer</p>
        </div>
        <div className="home-page-profile-info"></div>
      </div>
      <div className="home-page-image-container">
        <img className="face-image" src={Face} alt="face" />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  startAnimationEnd: PropTypes.bool,
};

import React, { useState } from "react";
import { gsap } from "gsap";

import Line from "../line";

const MenuButton = ({ onClickButton = () => null }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newStyles, setNewStyles] = useState(false);
  const [lineValues, setLineValues] = useState({
    0: 90,
    1: 60,
    2: 30,
  });

  const handleMouse = () => {
    setIsMouseEnter(!isMouseEnter);
    setLineValues({
      0: isMouseEnter ? 90 : 100,
      1: isMouseEnter ? 60 : 100,
      2: isMouseEnter ? 30 : 100,
    });
    if (newStyles) {
      setLineValues({
        0: 100,
        1: 100,
        2: 100,
      });
    }
  };

  const handleButton = () => {
    gsap.to(".down-screen-container", {
      top:
        isMenuOpen && document.querySelector(".down-screen-container").style.top !== "100%"
          ? "100%"
          : 0,
    });
    setIsMenuOpen(!isMenuOpen);
    onClickButton();
    setNewStyles(!newStyles);
  };

  return (
    <div
      className="menu-button-container"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      onClick={handleButton}
    >
      <Line lineWidth={lineValues["0"]} />
      <Line lineWidth={lineValues["1"]} />
      <Line lineWidth={lineValues["2"]} />
    </div>
  );
};

export default MenuButton;

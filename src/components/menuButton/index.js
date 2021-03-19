import React, { useState } from "react";

import Line from "../line";

const MenuButton = ({ onClickButton }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [newStyles, setNewStyles] = useState(false);
  const [lineValues, setLineValues] = useState({
    0: 90,
    1: 60,
    2: 30,
  });

  //   const stylesObject = {
  //     newBackground: {
  //       background: "white",
  //       bottom: 91 + "%",
  //     },
  //     transform: {
  //       transform: newStyles && "rotate(180deg)",
  //       color: isMouseEnter || newStyles ? "black" : "white",
  //     },
  //   };

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
    onClickButton();
    setNewStyles(!newStyles);
  };

  return (
    <div
      className="menu-button-container"
      // style={newStyles ? stylesObject["newBackground"] : null}
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

import React, { useState, useEffect } from "react";
import "./styles/styles.css";

//Component imports
import Header from "./components/header";
import MenuButton from "./components/menuButton";
import DownScreen from "./components/downScreen";
import StartScreen from "./components/startScreen";
// import ThreeScene from "./components/threeScene";
import HomePage from "./components/homePage";
// import Vanta from "./components/vanta";
import UpArrow from "./components/upArrow";
import DownArrow from "./components/downArrow";
import AboutMe from "./components/sections/aboutMe";
import Technologies from "./components/sections/technologies";
import Contact from "./components/sections/contact";

import { gsap } from "gsap";

const MAX_SLIDES = 3;

const App = () => {
  const [startAnimationEnd, setStartAnimationEnd] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(true);
  const [slideNumber, setslideNumber] = useState(0); // 0 === home page

  const handleSlide = (arrowType) => {
    if (arrowType === "up") {
      setslideNumber(slideNumber === 0 ? 0 : slideNumber - 1);
      gsap.fromTo(
        ".main-wrapper",
        { y: `-${slideNumber * 100}vh` },
        { y: `-${(slideNumber - 1) * 100}vh`, duration: 1 }
      );
    } else {
      gsap.fromTo(
        ".main-wrapper",
        { y: `-${slideNumber * 100}vh` },
        { y: `-${(slideNumber + 1) * 100}vh`, duration: 1 }
      );
      setslideNumber(slideNumber === MAX_SLIDES ? MAX_SLIDES : slideNumber + 1);
    }
  };

  useEffect(() => {
    const switchOnScroll = (e) => {
      if (e.deltaY < 0) {
        handleSlide("up");
      } else if (e.deltaY > 0) {
        handleSlide("down");
      }
    };

    document.addEventListener("wheel", switchOnScroll);
    return () => document.removeEventListener("wheel", switchOnScroll);
  }, []);

  useEffect(() => {
    if (slideNumber > MAX_SLIDES) setslideNumber(MAX_SLIDES);
  }, [slideNumber]);

  return (
    <div className="App">
      <StartScreen
        animationEnd={() => setStartAnimationEnd(true)}
        vantaLoaded={vantaLoaded}
      />
      <Header>
        <MenuButton />
      </Header>

      <div className="main-wrapper">
        <HomePage startAnimationEnd={startAnimationEnd} />
        <AboutMe />
        <Technologies />
        <Contact />

        {/* <ThreeScene /> */}
        {/* <Vanta vantaLoaded={() => setVantaLoaded(true)} /> */}
      </div>

      <DownScreen />
      {slideNumber >= 1 && <UpArrow onClick={() => handleSlide("up")} />}
      {slideNumber !== MAX_SLIDES && (
        <DownArrow onClick={() => handleSlide("down")} />
      )}
    </div>
  );
};

export default App;

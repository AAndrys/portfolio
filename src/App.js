import React, { useState } from "react";
import "./styles/styles.css";

//Component imports
import Header from "./components/header";
import MenuButton from "./components/menuButton";
import DownScreen from "./components/downScreen";
import StartScreen from "./components/startScreen";
import ThreeScene from "./components/threeScene";
import HomePage from "./components/homePage";
import Vanta from "./components/vanta";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [startAnimationEnd, setStartAnimationEnd] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  return (
    <div className="App">
      <StartScreen
        animationEnd={() => setStartAnimationEnd(true)}
        vantaLoaded={vantaLoaded}
      />
      <Header>
        <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} />
      </Header>
      <HomePage startAnimationEnd={startAnimationEnd} />
      {/* <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} /> */}
      <DownScreen isMenuOpen={isMenuOpen} />
      {/* <ThreeScene /> */}
      <Vanta vantaLoaded={() => setVantaLoaded(true)} />
    </div>
  );
};

export default App;

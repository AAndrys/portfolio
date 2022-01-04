import React, { useState } from "react";
import "./styles/styles.css";

//Component imports
import Header from "./components/header";
import MenuButton from "./components/menuButton";
import DownScreen from "./components/downScreen";
import StartScreen from "./components/startScreen";
// import ThreeScene from "./components/threeScene";
import HomePage from "./components/homePage";
// import Vanta from "./components/vanta";
import DownArrow from "./components/downArrow";

const App = () => {
  const [startAnimationEnd, setStartAnimationEnd] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(true);
  const [slideNumber, setslideNumber] = useState(1);

  return (
    <div className="App">
      <StartScreen animationEnd={() => setStartAnimationEnd(true)} vantaLoaded={vantaLoaded} />
      <Header>
        <MenuButton />
      </Header>
      <HomePage startAnimationEnd={startAnimationEnd} />
      <div id="second" style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        <h1>FDSFESF</h1>
      </div>
      {/* <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} /> */}
      <DownScreen />
      <DownArrow />
      {/* <ThreeScene /> */}
      {/* <Vanta vantaLoaded={() => setVantaLoaded(true)} /> */}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './styles/styles.css';

//Component imports
import Header from './components/header';
import MenuButton from './components/menuButton';
import DownScreen from './components/downScreen';
import StartScreen from './components/startScreen';
import ThreeScene from './components/threeScene';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <StartScreen />
      <Header>
        <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} />
      </Header>
      {/* <div className="main-component-container">
        <h1>
          WELCOME TO MY WEBSITE
          <i className="animated-dot"> .</i>
        </h1>
      </div> */}
      {/* <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} /> */}
      <DownScreen isMenuOpen={isMenuOpen} />
      <ThreeScene />
    </div>
  );
};

export default App;
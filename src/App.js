import React, { useState } from 'react';
import './styles/styles.css';

//Component imports
import Header from './components/header';
import MenuButton from './components/menuButton';
import DownScreen from './components/downScreen';
import ContainerWithLeftBorder from './components/containerWithLeftBorder';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      {/* <ContainerWithLeftBorder />
      <ContainerWithLeftBorder componentWidth={'50%'} > */}
        <div className='main-component-container'>
          <h1>WELCOME TO OUR WEBSITE
            <i className='animated-dot'> .</i>
          </h1>
        </div>
      {/* </ContainerWithLeftBorder>
      <ContainerWithLeftBorder /> */}
      <MenuButton onClickButton={() => setIsMenuOpen(!isMenuOpen)} />
      <DownScreen isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import './styles/styles.css';

//Component imports
import DownArrow from './components/downArrow';
import DownScreen from './components/downScreen';
import Header from './components/header';
import HomePage from './components/homePage';
import MenuButton from './components/menuButton';
import AboutMe from './components/sections/aboutMe';
import Contact from './components/sections/contact';
import Technologies from './components/sections/technologies';
import Testimonial from './components/sections/testimonial';
import StartScreen from './components/startScreen';
// import ThreeScene from "./components/threeScene";
// import Vanta from "./components/vanta";
import UpArrow from './components/upArrow';
import Projects from './components/sections/projects';

const MAX_SLIDES = 3;
const SECTIONS = ['#Home', '#AboutMe', '#Technologies', '#Testimonial', '#Contact'];

const App = () => {
  const [endHomePageAnimation, setEndHomePageAnimation] = useState(false);
  const [startAnimationEnd, setStartAnimationEnd] = useState(false);
  const [slideNumber, setslideNumber] = useState(0); // 0 === home page

  const handleSlide = (arrowType) => {
    if (arrowType === 'up') {
      setslideNumber(slideNumber === 0 ? 0 : slideNumber - 1);
      window.location.href = SECTIONS[slideNumber === 0 ? 0 : slideNumber - 1];
    } else {
      setslideNumber(slideNumber === MAX_SLIDES ? MAX_SLIDES : slideNumber + 1);
      window.location.href = SECTIONS[slideNumber === MAX_SLIDES ? MAX_SLIDES : slideNumber + 1];
    }
  };

  useEffect(() => {
    if (slideNumber > MAX_SLIDES) setslideNumber(MAX_SLIDES);
  }, [slideNumber]);

  return (
    <div className="App" style={{ display: 'grid', overflow: 'hidden' }}>
      <StartScreen animationEnd={() => setStartAnimationEnd(true)} />
      {endHomePageAnimation && (
        <Header>
          <MenuButton />
        </Header>
      )}

      <main className="main-wrapper" style={{ justifySelf: 'center', width: '100%' }}>
        <HomePage
          startAnimationEnd={startAnimationEnd}
          endAnimation={endHomePageAnimation}
          setEndAnimation={() => setEndHomePageAnimation(true)}
        />
        <AboutMe />
        <Technologies />
        {/* <Testimonial /> */}
        <Projects />
        <Contact />

        {/* <ThreeScene /> */}
        {/* <Vanta vantaLoaded={() => setVantaLoaded(true)} /> */}
      </main>

      <DownScreen />

      {endHomePageAnimation && slideNumber >= 1 && <UpArrow onClick={() => handleSlide('up')} />}
      {endHomePageAnimation && slideNumber !== MAX_SLIDES && (
        <DownArrow onClick={() => handleSlide('down')} />
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

//Component imports
import DownArrow from './components/downArrow';
import DownScreen from './components/downScreen';
import Header from './components/header';
import HomePage from './components/homePage';
import MenuButton from './components/menuButton';
import AboutMe from './components/sections/aboutMe';
import Contact from './components/sections/contact';
import Technologies from './components/sections/technologies';
// import Testimonial from './components/sections/testimonial';
import StartScreen from './components/startScreen';
// import ThreeScene from "./components/threeScene";
// import Vanta from './components/vanta';
import UpArrow from './components/upArrow';
import Projects from './components/sections/projects';
import CookieBanner from './components/cookieBanner';
import Footer from './components/footer';

import Analytics from './utils/analytics';
import { classes } from './utils/class';
import { PAGES_LINK } from './utils/constants';

import './styles/styles.css';

const MAX_SLIDES = 4;
const SECTIONS = [
  PAGES_LINK.home,
  PAGES_LINK.about,
  PAGES_LINK.technologies,
  PAGES_LINK.projects,
  PAGES_LINK.contact
];

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
    classes.analytics = new Analytics();
    classes.analytics._initializeTracker();

    document.body.style.overflow = 'hidden';

    if (window.location.hash.length) {
      window.scrollTo({ top: 0 });
      window.location.replace('');
    }
  }, []);

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
        {/* <Vanta vantaLoaded={() => null} /> */}
      </main>
      <Footer />

      <CookieBanner />
      <DownScreen />

      {endHomePageAnimation && slideNumber >= 1 && <UpArrow onClick={() => handleSlide('up')} />}
      {endHomePageAnimation && slideNumber !== MAX_SLIDES && (
        <DownArrow onClick={() => handleSlide('down')} />
      )}
    </div>
  );
};

export default App;

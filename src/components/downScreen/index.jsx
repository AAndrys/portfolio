import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';

import ContainerWithLeftBorder from '../containerWithLeftBorder';
import NavItem from '../navItem';
import NormalText from '../normalText';

const NAVIGATION_LIST_ARRAY = [
  { text: 'Home', href: '#Home' },
  { text: 'About me', href: '#AboutMe' },
  { text: 'Technologies', href: '#Technologies' },
  { text: 'Contact', href: '#Contact' }
];

const DEFAULT_DESCRIPTION = <NormalText text="Menu" isAnimated />;
const DEFAULT_TEXT_NUMBER = (
  <NormalText text="05" isBold fontSize={30} textColor="rgba(255, 255, 255, 0.5)" isAnimated />
);

class DownScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      activeListItemIndex: null,
      mouseLeave: true,
      topDescriptions: [],
      mouseXPosition: 0,
      mouseYPosition: 0
    };

    this.descriptionList = {
      0: ['First page', '', ''],
      1: ['Little about me', '', ''],
      2: ['Technologies, which I used before', '', ''],
      3: ['Contact to me', '', ''],
      4: ['BurgerMenu5', '', '']
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  handleMouseOver = (index) => {
    this.setState({
      activeListItemIndex: index,
      mouseLeave: false,
      topDescriptions: this.descriptionList[`${index}`]
    });
  };

  handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.setState({
      mouseXPosition: mouseX - window.innerWidth * 0.4,
      mouseYPosition: mouseY - window.innerHeight * 0.1
    });
  };

  renderTextDescriptions = (descriptionsArray) => {
    return descriptionsArray.map((item, index) => (
      <NormalText text={item} key={index} isAnimated />
    ));
  };

  handleClickOnNavItem = () => {
    gsap.to('.down-screen-container', {
      top: '100%'
    });
  };

  renderTextNumber = (activeListItemIndex) => {
    return (
      <NormalText
        text={`0${activeListItemIndex + 1}`}
        isBold
        fontSize={30}
        key={activeListItemIndex}
        isAnimated
      />
    );
  };

  render() {
    const { activeListItemIndex, mouseLeave, topDescriptions } = this.state;

    return (
      <div className="down-screen-container">
        <div className="left-side-content">
          <div className="left-side-top-container">
            {mouseLeave ? DEFAULT_DESCRIPTION : this.renderTextDescriptions(topDescriptions)}
          </div>
          <div className="left-side-bottom-container">
            {mouseLeave ? DEFAULT_TEXT_NUMBER : this.renderTextNumber(activeListItemIndex)}
          </div>
        </div>
        <ContainerWithLeftBorder componentWidth="60%">
          <div className="middle-side-content">
            <div className="middle-side-container">
              <nav className="middle-navigation-list">
                {NAVIGATION_LIST_ARRAY.map(({ text, href }, index) => (
                  <NavItem
                    onClick={this.handleClickOnNavItem}
                    hrefLink={href}
                    text={text}
                    key={index}
                    isActive={!mouseLeave ? (activeListItemIndex === index ? false : true) : false}
                    onMouseEnter={() => this.handleMouseOver(index)}
                    onMouseLeave={() =>
                      this.setState({
                        activeListItemIndex: null,
                        mouseLeave: true
                      })
                    }
                    onMouseMove={(e) => this.handleMouseMove(e)}
                  />
                ))}
              </nav>
            </div>
          </div>
        </ContainerWithLeftBorder>
        <ContainerWithLeftBorder />
      </div>
    );
  }
}

export default DownScreen;

DownScreen.propTypes = {
  isMenuOpen: PropTypes.bool
};

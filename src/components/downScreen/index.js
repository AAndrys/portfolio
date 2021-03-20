import React from "react";
import PropTypes from "prop-types";
import ContainerWithLeftBorder from "../containerWithLeftBorder";
import NormalText from "../normalText";
import NavItem from "../navItem";
import FilterImage from "../filterImage";

const NAVIGATION_LIST_ARRAY = [
  "CHEESEBURGER",
  "BURGER",
  "BURGER1",
  "BURGER2",
  "NUTBURGER",
];

const BURGER_IMAGES = [
  require("../../assets/images/burger1.jpg").default,
  require("../../assets/images/burger2.jpg").default,
  require("../../assets/images/burger3.jpg").default,
  require("../../assets/images/burger4.jpg").default,
  require("../../assets/images/burger5.jpg").default,
];

const DEFAULT_DESCRIPTION = <NormalText text={"Service"} isAnimated />;
const DEFAULT_TEXT_NUMBER = (
  <NormalText
    text={"05"}
    isBold
    fontSize={30}
    textColor={"rgba(255, 255, 255, 0.5)"}
    isAnimated
  />
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
      mouseYPosition: 0,
    };

    this.descriptionList = {
      0: ["BurgerMenu1", "BurgerrMenu1", "BurgerrrrMenu1"],
      1: ["BurgerMenu2", "BurgerrMenu2", "BurgerrrrMenu2"],
      2: ["BurgerMenu3", "BurgerrMenu3", "BurgerrrrMenu3"],
      3: ["BurgerMenu4", "BurgerrMenu4", "BurgerrrrMenu4"],
      4: ["BurgerMenu5", "BurgerrMenu5", "BurgerrrrMenu5"],
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.isMenuOpen) {
  //     this.setState({
  //       isProp: true,
  //     });
  //   }
  // }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  handleMouseOver = (index) => {
    this.setState({
      activeListItemIndex: index,
      mouseLeave: false,
      topDescriptions: this.descriptionList[`${index}`],
    });
  };

  handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.setState({
      mouseXPosition: mouseX - window.innerWidth * 0.4,
      mouseYPosition: mouseY - window.innerHeight * 0.1,
    });
  };

  renderTextDescriptions = (descriptionsArray) => {
    return descriptionsArray.map((item, index) => (
      <NormalText text={item} key={index} isAnimated />
    ));
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
    const {
      isLoaded,
      activeListItemIndex,
      mouseLeave,
      topDescriptions,
      mouseXPosition,
      mouseYPosition,
    } = this.state;
    const { isMenuOpen } = this.props;

    return (
      <div
        className={
          isLoaded
            ? isMenuOpen
              ? "down-screen-container startAnimation"
              : "down-screen-container closeAnimation"
            : "down-screen-container"
        }
      >
        <div className="left-side-content">
          <div className="left-side-top-container">
            {mouseLeave
              ? DEFAULT_DESCRIPTION
              : this.renderTextDescriptions(topDescriptions)}
          </div>
          <div className="left-side-bottom-container">
            {mouseLeave
              ? DEFAULT_TEXT_NUMBER
              : this.renderTextNumber(activeListItemIndex)}
          </div>
        </div>
        <ContainerWithLeftBorder componentWidth={"50%"}>
          <div className="middle-side-content">
            <div className="middle-side-container">
              <nav className="middle-navigation-list">
                {NAVIGATION_LIST_ARRAY.map((item, index) => (
                  <NavItem
                    text={item}
                    key={index}
                    isActive={
                      !mouseLeave
                        ? activeListItemIndex === index
                          ? false
                          : true
                        : false
                    }
                    onMouseEnter={() => this.handleMouseOver(index)}
                    onMouseLeave={() =>
                      this.setState({
                        activeListItemIndex: null,
                        mouseLeave: true,
                      })
                    }
                    onMouseMove={(e) => this.handleMouseMove(e)}
                  />
                ))}
              </nav>
              <FilterImage
                imgSrc={BURGER_IMAGES[activeListItemIndex]}
                mouseLeave={mouseLeave}
                moveX={mouseXPosition}
                moveY={mouseYPosition}
              />
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
  isMenuOpen: PropTypes.bool.isRequired,
};

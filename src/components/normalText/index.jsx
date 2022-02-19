import React from "react";
import PropTypes from "prop-types";

const NormalText = (props) => {
  const {
    text,
    fontSize = 16,
    isBold = false,
    textColor = "white",
    isAnimated = false,
  } = props;

  const styles = {
    fontSize: fontSize + "px",
    fontWeight: isBold && "bold",
    color: textColor,
  };

  return (
    <p
      className={
        isAnimated ? "normal-text animated-normal-text" : "normal-text"
      }
      style={styles}
    >
      {text}
    </p>
  );
};

export default NormalText;

NormalText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  isBold: PropTypes.bool,
  textColor: PropTypes.string,
  isAnimated: PropTypes.bool,
};

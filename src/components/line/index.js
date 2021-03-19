import React from "react";
import PropTypes from "prop-types";

const Line = ({ lineHeight = 5, lineWidth = 90 }) => {

    const spanStyle = {
        width: `${lineWidth}%`,
        height: `${lineHeight}px`
    };

  return (
    <>
      <span id="menu-button-line" style={spanStyle} />
    </>
  );
};

export default Line;

Line.propTypes = {
  lineWidth: PropTypes.number,
  lineHeight: PropTypes.number,
};
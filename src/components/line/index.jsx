import PropTypes from 'prop-types';
import React from 'react';

const Line = ({ lineHeight = 2, lineWidth = 90 }) => {
  const spanStyle = {
    width: `${lineWidth}%`,
    height: `${lineHeight}px`
  };

  return <span id="menu-button-line" style={spanStyle} />;
};

export default Line;

Line.propTypes = {
  lineWidth: PropTypes.number,
  lineHeight: PropTypes.number
};

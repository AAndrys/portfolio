import PropTypes from 'prop-types';
import React from 'react';

const HeaderTitle = ({ text, animationEnd, displayAnimation }) => {
  return (
    <>
      <h1
        className="name-animation"
        onAnimationEnd={animationEnd}
        style={{ display: displayAnimation ? 'none' : 'flex' }}
      >
        {text}
      </h1>
    </>
  );
};

export default HeaderTitle;

HeaderTitle.propTypes = {
  text: PropTypes.string,
  animationEnd: PropTypes.func,
  displayAnimation: PropTypes.bool
};

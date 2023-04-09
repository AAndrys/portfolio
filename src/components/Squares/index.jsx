import React from 'react';
import SquaresIcon from '../../assets/svgs/squares.svg';

const Squares = ({ bottom, right }) => {
  return (
    <div className="square-wrapper" style={{ bottom: bottom, right: right }}>
      <img src={SquaresIcon} alt="squares" loading="lazy" />
    </div>
  );
};

export default Squares;

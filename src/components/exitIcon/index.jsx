import React from 'react';
import CloseIcon from '../../assets/svgs/close-icon.svg';

const ExitIcon = ({ onClick }) => {
  return (
    <div className="exit-icon-wrapper" onClick={onClick}>
      <img src={CloseIcon} alt="Close icon" />
    </div>
  );
};

export default ExitIcon;

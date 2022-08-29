import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DownArrow = ({ onClick }) => {
  return (
    <div className="down-arrow-container">
      <FontAwesomeIcon icon={faArrowDown} onClick={onClick} />
    </div>
  );
};

export default DownArrow;

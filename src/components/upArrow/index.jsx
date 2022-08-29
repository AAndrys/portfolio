import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpArrow = ({ onClick }) => {
  return (
    <div className="up-arrow-container">
      <FontAwesomeIcon icon={faArrowUp} onClick={onClick} />
    </div>
  );
};

export default UpArrow;

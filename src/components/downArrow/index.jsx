import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const DownArrow = ({ onClick }) => {
  return (
    <div className="down-arrow-container">
      <FontAwesomeIcon icon={faArrowDown} onClick={onClick} />
    </div>
  );
};

export default DownArrow;

DownArrow.propTypes = {};

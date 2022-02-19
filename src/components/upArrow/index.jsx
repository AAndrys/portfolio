import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpArrow = ({ onClick }) => {
  return (
    <div className="up-arrow-container">
      <FontAwesomeIcon icon={faArrowUp} onClick={onClick} />
    </div>
  );
};

export default UpArrow;

UpArrow.propTypes = {};

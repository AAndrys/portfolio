import React from "react";
// import PropTypes from "prop-types";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const DownArrow = () => {
  return (
    <div className="down-arrow-container">
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
};

export default DownArrow;

DownArrow.propTypes = {};

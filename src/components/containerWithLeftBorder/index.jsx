import React from "react";
import PropTypes from "prop-types";

const ContainerWithLeftBorder = ({ children, componentWidth = "15%" }) => {
  const styles = {
    width: componentWidth,
  };

  return (
    <div className="container-with-border" style={styles}>
      {children}
    </div>
  );
};

export default ContainerWithLeftBorder;

ContainerWithLeftBorder.propTypes = {
  componentWidth: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Header = ({ children }) => {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="header-title-container">
          <h1 className="text-header">AA</h1>
          <p className="normal-text-header">&nbsp; Portfolio</p>
          {/* <p className="normal-text-header">&nbsp; | &nbsp;</p> */}
          {/* <h1 className="text-header">Portfolio</h1> */}
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.any,
};

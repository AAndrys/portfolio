import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-title-container">
          <h1 className="text-header">AA</h1>
          <p className="normal-text-header">&nbsp; Portfolio</p>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.any
};

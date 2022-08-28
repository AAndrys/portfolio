import React from 'react';
import ReactDom from 'react-dom';

const CookieBanner = () => {
  return ReactDom.createPortal(
    <div className="cookie-banner-wrapper">
      <div className="container"></div>
    </div>,
    document.body
  );
};

export default CookieBanner;

import React from "react";

const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      <div className="layout-container">
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Layout;

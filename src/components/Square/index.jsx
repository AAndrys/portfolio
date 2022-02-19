import React from "react";

const Square = ({ width = 380, height = 380, bottom = 0, right = 120 }) => {
  return (
    <div className="square-wrapper" style={{ bottom: bottom, right: right }}>
      <div
        style={{
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

export default Square;

import React, { useState } from "react";
import PropTypes from "prop-types";

const HomePage = ({ startAnimationEnd }) => {
  const [firstAnimationEnd, setFirstAnimationEnd] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);

  return (
    <div className="home-page-container">
      <div className="home-page-text-content">
        {startAnimationEnd ? (
          <h1
            className="name-animation"
            onAnimationEnd={() => setFirstAnimationEnd(true)}
            style={{ display: firstAnimationEnd ? "none" : "flex" }}
          >
            MY NAME IS
          </h1>
        ) : null}
        {firstAnimationEnd ? (
          <h1
            className="name-animation"
            onAnimationEnd={() => setEndAnimation(true)}
            style={{ display: endAnimation ? "none" : "flex" }}
          >
            ADAM ANDRYSIAK
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  startAnimationEnd: PropTypes.bool,
};

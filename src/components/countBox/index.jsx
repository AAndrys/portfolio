import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountBox = ({ text, countNumber = 0, duration = 2 }) => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={wrapperRef} className="count-box">
      <div className="count-box-wrapper">
        {isInView && <CountUp end={countNumber} duration={duration} />}
        <span>+</span>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CountBox;

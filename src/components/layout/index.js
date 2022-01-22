import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const Layout = ({ id, title, children }) => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isInView) gsap.to(`#layout_${id}`, { scaleY: 1, opacity: 1, duration: 0.6 });
    else gsap.to(`#layout_${id}`, { scaleY: 0, opacity: 0, duration: 0.6 });
  }, [isInView]);

  return (
    <div className="layout-wrapper" id={id}>
      <div ref={wrapperRef} className="layout" id={`layout_${id}`}>
        <div className="layout-container">
          {title && <h1>{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

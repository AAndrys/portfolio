import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const Layout = ({ id, title, isMiddle, children }) => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isInView) gsap.to(`#layout_${id}`, { yPercent: 0, opacity: 1, duration: 0.6 });
    else gsap.to(`#layout_${id}`, { yPercent: 10, opacity: 0, duration: 0.6 });
  }, [isInView]);

  return (
    <section className="layout-wrapper" id={id}>
      <div
        ref={wrapperRef}
        className={isMiddle ? "layout layout-margin-left" : "layout layout-margin-right"}
        id={`layout_${id}`}
      >
        <div className="layout-container">
          {title && <h1>{title}</h1>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;

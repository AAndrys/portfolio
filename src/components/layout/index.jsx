import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Layout = ({ id, title, gridColumn, children }) => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    if (isInView) gsap.to(`#${id}`, { yPercent: 0, opacity: 1, duration: 0.6 });
    else gsap.to(`#${id}`, { yPercent: 5, opacity: 0, duration: 0.6 });
  }, [isInView, id]);

  return (
    <section className="layout-wrapper" id={id}>
      <div ref={wrapperRef} className="layout">
        <div className="layout-container" style={{ gridColumn: gridColumn }}>
          {title && <h1>{title}</h1>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;

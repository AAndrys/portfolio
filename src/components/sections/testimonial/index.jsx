import React from 'react';

import JsTestimonial from '../../Icons/Js-Testimonial';

const Testimonial = () => {
  return (
    <section id="Testimonial" className="bottom-line">
      <div className="testimonial-wrapper">
        <h1 className="testimonial-heading-top">Javascript</h1>

        <div className="rect mineShaft" />
        <div className="icon-rect">
          <JsTestimonial />
        </div>
        <div className="icon-rect">
          <JsTestimonial />
        </div>
        <div className="rect mineShaftLighter" />

        <h1 className="testimonial-heading-bottom">Developer</h1>
      </div>
    </section>
  );
};

export default Testimonial;

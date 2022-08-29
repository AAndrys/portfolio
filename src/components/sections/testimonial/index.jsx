import React from 'react';
import { useInView } from 'react-intersection-observer';
import JsTestimonial from '../../Icons/Js-Testimonial';

import Layout from '../../layout';

const Testimonial = () => {
  // const [wrapperRef, isInView] = useInView({
  //   threshold: 0.1
  // });

  return (
    // <Layout id="Testimonial">
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
    // </Layout>
  );
};

export default Testimonial;

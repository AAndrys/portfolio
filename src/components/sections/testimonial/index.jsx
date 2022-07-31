import React from 'react';
import { useInView } from 'react-intersection-observer';

import Layout from '../../layout';

const Testimonial = () => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1
  });

  return (
    <Layout title="Testimonial" id="Testimonial">
      <div ref={wrapperRef} className="testimonial-wrapper">
        <p>fdsfdf</p>
      </div>
    </Layout>
  );
};

export default Testimonial;

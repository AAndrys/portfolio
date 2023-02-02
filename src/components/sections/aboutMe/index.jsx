import React from 'react';
import { useInView } from 'react-intersection-observer';

import { countHours } from '../../../utils/countHours';
import { calculateYears } from '../../../utils/calculateYears';
import { BIRTHDAY_DATE, EXPERIENCE_DATE } from '../../../utils/constants';
import CountBox from '../../countBox';
import Layout from '../../layout';
import Squares from '../../Squares';

const AboutMe = () => {
  const [wrapperRef] = useInView({
    threshold: 0.1
  });

  return (
    <Layout title="About" id="About" gridColumn="1/13" bottomLine={false}>
      <Squares />
      <div ref={wrapperRef} className="about-wrapper">
        <p>
          Hello, my name is Adam. I am {calculateYears(new Date(BIRTHDAY_DATE))} years old and I am
          from Poland. As you can see I am a JavaScript developer, and this is what I love so much!
          Too much time spent on learning, a lot of bad code and failures caused me resistant on
          defeat. Working with a large amount of code lines, experience from other teammates and a
          lot of overnight coding gave me more professionalism. I gain more and more skills every
          day.
          <br />
          <strong>Programming is my hobby and I love it!</strong>
        </p>

        <div className="about-amounts-container">
          <CountBox
            text="Years of experience"
            countNumber={calculateYears(new Date(EXPERIENCE_DATE))}
          />
          <CountBox text="Number of written lines of code" countNumber={10000} />
          <CountBox text="Hours spent on coding" countNumber={countHours()} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;

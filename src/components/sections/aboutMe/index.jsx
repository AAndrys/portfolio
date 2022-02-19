import React from "react";
import { useInView } from "react-intersection-observer";

import Layout from "../../layout";
import CountBox from "../../countBox";
import Square from "../../Square";

const AboutMe = ({}) => {
  const [wrapperRef, isInView] = useInView({
    threshold: 0.1,
  });

  return (
    <Layout title="About" id="AboutMe" gridColumn="1/13">
      <Square />
      <div ref={wrapperRef} className="about-wrapper">
        <p>
          Hello, my name is Adam. I am 22 years old and I am from Poland. As you
          can see I am a JavaScript developer, and this is what I love so much!
          Too much time spent on learning, a lot of bad code and failures caused
          me resistant on defeat. Working with a large amount of lines code,
          experience caused me increasing more professionalism.
          <br />
          <strong>Programming is my hooby and I love it!</strong>{" "}
        </p>

        <div className="about-amounts-container">
          <CountBox text="Years of experience" countNumber={1} />
          <CountBox
            text="Number of written lines of code"
            countNumber={10000}
          />
          <CountBox text="Hours spent on learning" countNumber={4860} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;

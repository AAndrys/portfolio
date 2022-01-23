import React from "react";

import Layout from "../../layout";

const AboutMe = ({}) => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [wrapperRef, isInView] = useInView({
  //   threshold: 0.1,
  // });

  // useEffect(() => {
  //   setIsVisible(isInView);
  // }, [isInView]);

  // useEffect(() => {
  //   gsap.fromTo(".layout", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 });
  // }, [isVisible]);

  return (
    <Layout title="About" id="AboutMe" isMiddle>
      <div className="s">
        <p>Example text</p>
      </div>
    </Layout>
  );
};

export default AboutMe;

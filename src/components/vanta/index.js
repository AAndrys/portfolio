import React from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

class Vanta extends React.Component {
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef();
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (THREE && FOG) {
      this.vantaEffect = FOG({
        el: this.vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        highlightColor: 0x20000,
        midtoneColor: 0x434343,
        lowlightColor: 0x0,
        baseColor: 0x111111,
        speed: 0.4,
      });
      this.props.vantaLoaded();
    }
    window.addEventListener("resize", this.vantaResize);
  }

  vantaResize = () => {
    if (this.vantaEffect) {
      this.vantaEffect.setOptions({
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
      });
      this.vantaEffect.resize();
    }
  };

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
    window.removeEventListener("resize", this.vantaResize);
  }

  render() {
    return (
      <div
        ref={this.vantaRef}
        style={{ position: "absolute", zIndex: "-100" }}
      />
    );
  }
}

export default Vanta;

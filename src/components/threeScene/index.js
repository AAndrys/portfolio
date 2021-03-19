import React, { Component } from "react";
import * as THREE from "three";

class ThreeScene extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    this.scene = scene;
    // scene.background = new THREE.Color("green");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight();
    light.position.set(0, 2, 1);
    scene.add(light);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshPhongMaterial({
    //   color: new THREE.Color("skyblue"),
    // });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    this.group = new THREE.Group();
    let x = -3.8;
    let z = 0;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.group.add(this.generateCube(x, -1, -z));
        x += 1.1;
      }
      x = -3.8;
      z += 1.2;
    }

    this.group.rotation.x = 0.1;
    this.group.position.set(-1, -3, -3);

    scene.add(this.group);
    // this.generatePlane();
    console.log(this.group);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  // setBackgroundTexture = (background) => {
  //   const texture = new THREE.TextureLoader().load(
  //     "https://papers.co/wallpaper/papers.co-vv85-sky-dark-star-night-nature-pattern-background-blue-36-3840x2400-4k-wallpaper.jpg"
  //   );
  //   background = texture;
  // };

  generatePlane = () => {
    const planeGeometry = new THREE.PlaneGeometry(10, 20, 32);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xccac20,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = 1.6;
    plane.position.set(0, -4, -12);

    this.scene.add(plane);
  };

  generateCube = (x = 0, y = 0, z = 0) => {
    const geometry = new THREE.BoxGeometry(1, 0.1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#023b66"),
    });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(x, y, z);
    return cube;
  };

  render() {
    return (
      <div
        ref={(ref) => (this.mount = ref)}
        style={{ position: "absolute", zIndex: "-100" }}
      />
    );
  }
}

export default ThreeScene;

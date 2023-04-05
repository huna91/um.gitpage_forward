import { useGLTF } from "@react-three/drei";
import React, { Component } from "react";
import { Scene, WebGLRenderer, PerspectiveCamera, VSMShadowMap } from "three";

class Unit extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.scene = Scene();
    this.camera = null;
    this.renderer = null;

    this._previousDirectionOffset = 0;
    this._speed = 0;
    this._maxSpeed = 0;
    this._acceleration = 0;
    this._jumpAcctive = false;
    this._jumpSpeed = 0;
    this._jump_acceleration = 0;
    this._jump_maxSpeed = 0;
    this._jumpMax = 0;
    this._bOnTheGround = false;
    this._fallingAcceleration = 0;
    this._fallingSpeed = 0;
  }

  componentDidMount() {
    const divContainer = this.container.current;

    const renderer = WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = VSMShadowMap;

    this.renderer = renderer;

    const camera = PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera = camera;
    camera.position.set(0, 0, 10);

    this._setupLight();
    this._setupEnvironment();
    this._setupModel();
    this._setupControls();

    divContainer.appendChild(renderer.domElement);
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  _setupCamera() {
    // ...
  }

  _setupLight() {
    // ...
  }

  _setupEnvironment() {
    // ...
  }

  _setupModel() {
    // ...
  }

  _setupControls() {
    // ...
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // ...

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return <div id="webgl-container" ref={this.container} />;
  }
}

export default Unit;

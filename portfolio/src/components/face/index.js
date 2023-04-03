import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Face = (props) => {
  const { nodes, materials } = useGLTF("/test.gltf");
  console.log(nodes.Cylinder);
  return <div>Face</div>;
};

export default Face;

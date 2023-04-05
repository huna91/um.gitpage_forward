import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Space(props) {
  const { nodes, materials } = useGLTF("/space.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/space.glb");

import React, { useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const Title = (props) => {
  const { color } = props;
  const [hovered, setHovered] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <group>
      <mesh
        {...props}
        scale={click ? (1, 1, 1) : (0.8, 0.8, 0.8)}
        onClick={() => setClick(!click)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere visible args={[1.2, 200, 400]}>
          <MeshDistortMaterial
            color={hovered ? "#E4007F" : color}
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

export default Title;

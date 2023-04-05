import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";

import { Character, Space } from "3dModel";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

const ThreeControl = () => {
  // 애니메이션
  const [actions, setActions] = useState("Idle");
  // keyboard control
  const [pressedKey, setPressedKey] = useState(null);
  // 위치
  const [position, setPosition] = useState([0, 0, 0]);

  const _move = (val) => {
    // console.log(val.key, "앱앱");
    setPressedKey(val.key);
  };

  useEffect(() => {}, [pressedKey]);
  return (
    <>
      <Canvas className="canvas" onKeyDown={_move} tabIndex={0}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 10, 10]} />
        <pointLight position={[10, 10, -10]} />
        {/* <Title color={"#e5efa3"} position={[1.2, 0, 0]} />
        <Title color={"#ffffff"} position={[-1.2, 0, 0]} />
      <Unit preset={"city"} /> */}
        {/* 캐릭터 불러올때 로딩 컴포넌트 fallback에 넣기 */}
        <Physics gravity={[0, -5, 0]}>
          <Suspense fallback={null}>
            <Space />
            <Character scale={"3"} action={actions} pressedKey={pressedKey} />
          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeControl;

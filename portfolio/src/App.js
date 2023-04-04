import "./App.css";
import { Box, Face, Title, Unit } from "./components";
import { Character } from "./3dModel";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useMove } from "./hooks";
import { Physics } from "@react-three/cannon";

function App() {
  const [actions, setActions] = useState("Idle");
  const [pressedKey, setPressedKey] = useState(null);
  const _move = (val) => {
    // console.log(val.key, "앱앱");
    setPressedKey(val.key);
  };
  useEffect(() => {}, [pressedKey]);
  return (
    <div className="App">
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
            <Character scale={"10"} action={actions} pressedKey={pressedKey} />
          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
      <div className="controls">
        {/* <button
          onClick={() => {
            setActions("Walk");
          }}
        >
          Walk
        </button>
        <button
          onClick={() => {
            setActions("Run");
          }}
        >
          Run
        </button>
        <button
          onClick={() => {
            setActions("Jump");
          }}
        >
          Jump
        </button> */}
      </div>
    </div>
  );
}

export default App;

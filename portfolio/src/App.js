import "./App.css";
import { Box, Face, Title } from "./components";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Title color={"#e5efa3"} position={[1.2, 0, 0]} />
        <Title color={"#ffffff"} position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;

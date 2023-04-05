import "./App.css";
import { Box, Face, Title, Unit, ThreeControl } from "./components";
import { Suspense, useEffect, useState } from "react";
import { useMove } from "./hooks";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <ThreeControl />
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

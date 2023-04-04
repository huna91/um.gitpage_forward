import React, { useState } from "react";
import { Vector3 } from "three";

const useKey = (key) => {
  const [position, setPosition] = useState(new Vector3(0, 0, 0));
  const [rotation, setRotation] = useState(new Vector3(0, 0, 0));
  console.log(key);
  switch (key) {
    case "w":
      setPosition((prevPosition) => {
        prevPosition.add(new Vector3(0, 0, -1));
      });
      break;
    case "d":
      setPosition((prevPosition) => {
        prevPosition.add(new Vector3(0, 1, 0));
      });
      break;
    case "s":
      setPosition((prevPosition) => {
        prevPosition.add(new Vector3(0, 0, 1));
      });
      break;
    case "a":
      setPosition((prevPosition) => {
        prevPosition.add(new Vector3(0, -1, 0));
      });
      break;

    default:
      break;
  }

  return;
};

export default useKey;

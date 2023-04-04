import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { usePrevious, useKey } from "../../hooks";

export function Character(props) {
  const { action, pressedKey } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/chracter2.glb");
  const { actions } = useAnimations(animations, group);
  const previous_action = usePrevious(action);
  const previous_position = useKey((0, 0, 0));
  console.log(pressedKey);
  // 움직임 컨트롤
  useEffect(() => {
    if (previous_action) {
      actions[previous_action].stop();
    }
    actions[action].play();
  }, [action, actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            skeleton={nodes.Plane.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./chracter2.glb");

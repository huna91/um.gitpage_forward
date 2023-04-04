import { useGLTF } from "@react-three/drei";

const Unit = () => {
  const _character = useGLTF("./chracter-1.glb");
  return (
    <>
      <primitive object={_character.scene} scale={(10, 10, 10)} />
    </>
  );
};

export default Unit;

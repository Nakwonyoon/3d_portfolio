import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { MeshStandardMaterial } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* <icosahedronBufferGeometry args={[0, 0]} /> */}
        {/* <MeshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        /> */}

        {/* <Decal 
        map={decal} 
        position={[0, 0, 1]} 
        rotation= {[2 * Math.PI, 0, 6.25]}
        flatShading
        /> */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // const [shouldRender, setShouldRender] = useState(false);

  // useEffect(() => {
  //   // 컴포넌트 로딩을 5초 후로 지연
  //   const timer = setTimeout(() => setShouldRender(true), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (!shouldRender) {
  //   // 로딩 상태 또는 플레이스홀더를 여기에 표시할 수 있습니다.
  //   return <div>Loading Ball...</div>;
  // }
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;

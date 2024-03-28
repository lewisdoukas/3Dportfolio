/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Satellite = ({ isMobile }) => {
  const computer = useGLTF("./landsat/scene.gltf");

  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 10;
  //   ref.current.rotation.y += delta / 15;
  // });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 10]} intensity={isMobile ? 25 : 15} />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[-2, -3, -8]}
        intensity={isMobile ? 25 : 15}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2.5}
        position={isMobile ? [0, -3, -2.2] : [0, -1.5, -5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const SatelliteCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Satellite isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SatelliteCanvas;

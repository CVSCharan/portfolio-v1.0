import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
  pointer-events: none; // Ensures the canvas doesn't interfere with user interactions
`;

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState([]);
  const [starSize, setStarSize] = useState(0.002); // Default size
  const [radius, setRadius] = useState(1.2); // Default radius

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile View
        setStarSize(0.001); // Smaller stars
        setRadius(0.8); // Smaller radius
      } else if (window.innerWidth < 1024) {
        // Tablet View
        setStarSize(0.0015);
        setRadius(1.0);
      } else {
        // Desktop View
        setStarSize(0.002);
        setRadius(1.2);
      }
      setSphere(random.inSphere(new Float32Array(5000), { radius }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={starSize}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;

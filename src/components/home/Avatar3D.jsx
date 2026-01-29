// Avatar3D.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

function BoyPrimitive() {
  return (
    <group position={[0, -0.6, 0]} castShadow receiveShadow>
      {/* Head */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#F2C7A7" />
      </mesh>

      {/* Hair (cap) */}
      <mesh position={[0, 1.45, -0.02]} castShadow>
        <sphereGeometry args={[0.37, 32, 32]} />
        <meshStandardMaterial color="#2C2C2C" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 1.3, 0.31]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.12, 1.3, 0.31]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Body/Torso */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.75, 1.0, 0.45]} />
        <meshStandardMaterial color="#3B82F6" /> {/* blue shirt */}
      </mesh>

      {/* Arms */}
      <mesh position={[-0.48, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
      <mesh position={[0.48, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>

      {/* Hands */}
      <mesh position={[-0.48, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#F2C7A7" />
      </mesh>
      <mesh position={[0.48, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#F2C7A7" />
      </mesh>

      {/* Hips / Pants */}
      <mesh position={[0, 0.0, 0]} castShadow>
        <boxGeometry args={[0.65, 0.4, 0.45]} />
        <meshStandardMaterial color="#111827" /> {/* dark pants */}
      </mesh>

      {/* Legs */}
      <mesh position={[-0.18, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.9, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[0.18, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.9, 16]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.18, -0.98, 0.12]} castShadow>
        <boxGeometry args={[0.22, 0.12, 0.35]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.18, -0.98, 0.12]} castShadow>
        <boxGeometry args={[0.22, 0.12, 0.35]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function Avatar3D({ height = 500 }) {
  return (
    <section
      className="w-full bg-gray-900 flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <Canvas shadows camera={{ position: [2.8, 2, 3.5], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Nice lighting + ground via Stage */}
          <Stage environment="city" intensity={0.6} adjustCamera>
            <BoyPrimitive />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </section>
  );
}

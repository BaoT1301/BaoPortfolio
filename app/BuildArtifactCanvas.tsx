"use client";

import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MathUtils, Mesh } from "three";

function BuildTrace() {
  const groupRef = useRef<Group>(null);
  const signalRef = useRef<Mesh>(null);
  const targetRotation = useRef({ x: -0.24, y: 0.48 });
  const targetSignal = useRef(-1.08);
  const invalidate = useThree((state) => state.invalidate);

  useFrame((_, delta) => {
    const group = groupRef.current;
    const signal = signalRef.current;
    if (!group || !signal) return;

    group.rotation.x = MathUtils.damp(group.rotation.x, targetRotation.current.x, 7, delta);
    group.rotation.y = MathUtils.damp(group.rotation.y, targetRotation.current.y, 7, delta);
    signal.position.x = MathUtils.damp(signal.position.x, targetSignal.current, 9, delta);

    const rotationMoving =
      Math.abs(group.rotation.x - targetRotation.current.x) > 0.001 ||
      Math.abs(group.rotation.y - targetRotation.current.y) > 0.001;
    const signalMoving = Math.abs(signal.position.x - targetSignal.current) > 0.001;

    if (rotationMoving || signalMoving) invalidate();
  });

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    targetRotation.current = {
      x: -0.24 - event.pointer.y * 0.12,
      y: 0.48 + event.pointer.x * 0.18,
    };
    targetSignal.current = MathUtils.clamp(event.pointer.x * 1.2, -1.08, 1.08);
    invalidate();
  };

  const handlePointerLeave = () => {
    targetRotation.current = { x: -0.24, y: 0.48 };
    targetSignal.current = -1.08;
    invalidate();
  };

  return (
    <group
      ref={groupRef}
      rotation={[-0.24, 0.48, 0]}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerLeave}
    >
      <mesh position={[-1.15, 0, 0]}>
        <boxGeometry args={[0.65, 0.65, 0.65]} />
        <meshStandardMaterial color="#f4f2dc" roughness={0.72} metalness={0.04} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.82, 0.82, 0.82]} />
        <meshStandardMaterial color="#8c96ff" roughness={0.58} metalness={0.08} />
      </mesh>
      <mesh position={[1.15, 0, 0]}>
        <boxGeometry args={[0.65, 0.65, 0.65]} />
        <meshStandardMaterial color="#f4f2dc" roughness={0.72} metalness={0.04} />
      </mesh>

      <mesh position={[-0.57, 0, 0]} scale={[1.15, 0.055, 0.055]}>
        <boxGeometry />
        <meshStandardMaterial color="#706f69" roughness={1} />
      </mesh>
      <mesh position={[0.57, 0, 0]} scale={[1.15, 0.055, 0.055]}>
        <boxGeometry />
        <meshStandardMaterial color="#706f69" roughness={1} />
      </mesh>
      <mesh ref={signalRef} position={[-1.08, 0.5, 0.12]}>
        <sphereGeometry args={[0.095, 18, 18]} />
        <meshStandardMaterial color="#eed06d" emissive="#7b6927" emissiveIntensity={0.32} />
      </mesh>
    </group>
  );
}

export default function BuildArtifactCanvas() {
  return (
    <Canvas
      camera={{ fov: 30, position: [0, 0.2, 6.2] }}
      dpr={[1, 1.4]}
      frameloop="demand"
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-4, -2, 3]} intensity={0.7} color="#8c96ff" />
      <BuildTrace />
    </Canvas>
  );
}

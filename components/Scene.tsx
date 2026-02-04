import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DitherMaterial } from './DitherMaterial';

// Augment the JSX namespace to include Three.js elements that R3F supports
// This fixes "Property '...' does not exist on type 'JSX.IntrinsicElements'" errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      primitive: any;
      color: any;
      ambientLight: any;
      instancedMesh: any;
      octahedronGeometry: any;
      meshBasicMaterial: any;
    }
  }
}

const DitherSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, mouse } = useThree();

  // Create a custom geometry that's slightly more interesting than a basic sphere
  // Icosahedron with high detail for vertex displacement
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 40), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Smooth mouse interaction
      const targetX = (state.mouse.x * viewport.width) / 2;
      const targetY = (state.mouse.y * viewport.height) / 2;
      
      // Subtle parallax on the mesh itself
      if (meshRef.current) {
         meshRef.current.rotation.y += 0.002;
         meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, state.mouse.x * 0.1, 0.1);
      }
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.2}>
      {/* We use the custom shader material defined below */}
      <primitive object={DitherMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
};

export const Scene: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#030303']} />
      
      {/* Lighting is simulated in the shader, but we can add ambient for safety if we switch mats */}
      <ambientLight intensity={0.2} />
      
      <DitherSphere />
      
      {/* Floating particles for depth */}
      <Particles />
    </>
  );
};

const Particles = () => {
  const count = 100;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10 - 2; // Push back a bit
      temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        x + Math.cos(t / 10) * 1 + Math.sin(t * 1) / 10,
        y + Math.sin(t / 10) * 1 + Math.cos(t * 2) / 10,
        z + Math.cos(t / 10) * 1
      );
      dummy.scale.setScalar(Math.max(0.01, 0.03 * s + 0.01));
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#444444" wireframe />
    </instancedMesh>
  );
};
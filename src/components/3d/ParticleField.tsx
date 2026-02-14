import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;

const Particles = () => {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 10;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 6;

      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;

      // Cyan/teal colors matching the theme
      const isCyan = Math.random() > 0.3;
      if (isCyan) {
        col[i3] = 0.1 + Math.random() * 0.2;     // R
        col[i3 + 1] = 0.7 + Math.random() * 0.3;  // G
        col[i3 + 2] = 0.8 + Math.random() * 0.2;  // B
      } else {
        col[i3] = 0.2 + Math.random() * 0.2;
        col[i3 + 1] = 0.5 + Math.random() * 0.3;
        col[i3 + 2] = 0.9 + Math.random() * 0.1;
      }
    }
    return [pos, vel, col];
  }, []);

  const handlePointerMove = useCallback((e: THREE.Event) => {
    const event = e as unknown as { point: THREE.Vector3 };
    mouse.current.x = event.point.x;
    mouse.current.y = event.point.y;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const geometry = mesh.current.geometry;
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Base movement
      posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i) * 0.001;
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i) * 0.001;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Mouse attraction (subtle)
      const dx = mouse.current.x - posArray[i3];
      const dy = mouse.current.y - posArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        posArray[i3] += dx * 0.003;
        posArray[i3 + 1] += dy * 0.003;
      }

      // Boundaries
      if (Math.abs(posArray[i3]) > 6) velocities[i3] *= -1;
      if (Math.abs(posArray[i3 + 1]) > 5) velocities[i3 + 1] *= -1;
      if (Math.abs(posArray[i3 + 2]) > 3) velocities[i3 + 2] *= -1;
    }

    posAttr.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh} onPointerMove={handlePointerMove}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      scale: 0.1 + Math.random() * 0.15,
      speed: 0.3 + Math.random() * 0.5,
      type: i % 3,
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} index={i} />
      ))}
    </group>
  );
};

const FloatingShape = ({
  position,
  scale,
  speed,
  type,
  index,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  type: number;
  index: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * speed + index) * 0.5;
    ref.current.rotation.x = t * speed * 0.3;
    ref.current.rotation.z = t * speed * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {type === 0 && <octahedronGeometry args={[1, 0]} />}
      {type === 1 && <icosahedronGeometry args={[1, 0]} />}
      {type === 2 && <tetrahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial
        color={new THREE.Color().setHSL(0.51, 0.8, 0.5)}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

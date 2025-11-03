import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

const colorPalette = {
  'noir-mat': '#1d1d1f',
  blanc: '#f5f5f5',
  dore: '#f6c90e',
  argente: '#d8d8d8'
};

const temperaturePalette = {
  chaude: '#f2a65a',
  neutre: '#f7f1df',
  froide: '#c7e9ff'
};

function Suspension({ bodyColor, glowColor, glowIntensity }) {
  return (
    <group position={[0, -0.3, 0]}>
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.2, 16]} />
        <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.2, 1.3, 0.28, 48]} />
        <meshStandardMaterial color={bodyColor} metalness={0.65} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.22, 48]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={glowIntensity}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  );
}

function Mural({ bodyColor, glowColor, glowIntensity }) {
  return (
    <group>
      <mesh position={[0, 0, -0.12]}>
        <boxGeometry args={[1.2, 2.2, 0.24]} />
        <meshStandardMaterial color={bodyColor} metalness={0.45} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[0.9, 1.6, 0.16]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={glowIntensity}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  );
}

function Lampadaire({ bodyColor, glowColor, glowIntensity }) {
  return (
    <group position={[0, -0.6, 0]}>
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.6, 0.9, 0.24, 32]} />
        <meshStandardMaterial color={bodyColor} metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.18, 0.24, 1.8, 32]} />
        <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.38, 42, 42]} />
        <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0.64, 0]} scale={[0.86, 0.86, 0.86]}>
        <sphereGeometry args={[0.38, 36, 36]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={glowIntensity}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  );
}

function Exterieur({ bodyColor, glowColor, glowIntensity }) {
  return (
    <group position={[0, -0.4, 0]}>
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.18, 32]} />
        <meshStandardMaterial color={bodyColor} metalness={0.45} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.3, 24]} />
        <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.7, 0.5, 0.9, 32]} />
        <meshStandardMaterial color={bodyColor} metalness={0.45} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.68, 32]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={glowIntensity}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[0, 0.98, 0]}>
        <coneGeometry args={[0.7, 0.5, 32]} />
        <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.32} />
      </mesh>
    </group>
  );
}

function RotatingFixture({ config }) {
  const group = useRef();
  const { type, color, temperature, intensity } = config;
  const bodyColor = colorPalette[color];
  const glowColor = temperaturePalette[temperature];
  const glowIntensity = useMemo(() => 1.2 * (intensity / 100) + 0.2, [intensity]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {type === 'suspension' && (
        <Suspension bodyColor={bodyColor} glowColor={glowColor} glowIntensity={glowIntensity} />
      )}
      {type === 'mural' && <Mural bodyColor={bodyColor} glowColor={glowColor} glowIntensity={glowIntensity} />}
      {type === 'lampadaire' && (
        <Lampadaire bodyColor={bodyColor} glowColor={glowColor} glowIntensity={glowIntensity} />
      )}
      {type === 'exterieur' && (
        <Exterieur bodyColor={bodyColor} glowColor={glowColor} glowIntensity={glowIntensity} />
      )}
    </group>
  );
}

export default function ConfiguratorPreview({ config }) {
  const glowColor = temperaturePalette[config.temperature];
  const lightIntensity = 0.6 + config.intensity / 80;

  return (
    <div className="configurator-canvas">
      <Canvas camera={{ position: [0, 1.2, 4.5], fov: 45 }}>
        <color attach="background" args={[0.04, 0.04, 0.05]} />
        <ambientLight intensity={0.45 + config.intensity / 220} />
        <pointLight position={[1, 2, 3]} intensity={lightIntensity} color={glowColor} />
        <directionalLight position={[-2, 3, -2]} intensity={0.3} />
        <spotLight position={[0, 4, 0]} intensity={0.8} angle={0.8} penumbra={0.5} castShadow color="#ffffff" />
        <RotatingFixture config={config} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
          <circleGeometry args={[2.8, 48]} />
          <meshStandardMaterial color={'#070707'} transparent opacity={0.18} />
        </mesh>
      </Canvas>
    </div>
  );
}

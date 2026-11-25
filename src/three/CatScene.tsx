import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Ear({ side }: { side: -1 | 1 }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(-0.28, -0.32); shape.quadraticCurveTo(-0.24, 0.04, -0.12, 0.49)
    shape.quadraticCurveTo(-0.07, 0.58, 0.01, 0.48); shape.quadraticCurveTo(0.26, 0.15, 0.29, -0.32)
    shape.quadraticCurveTo(0, -0.43, -0.28, -0.32)
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.14, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.055, bevelThickness: 0.055, curveSegments: 10 })
    geo.center(); return geo
  }, [])
  return <group position={[side * 0.47, 1.22, -0.02]} rotation={[0, 0, side * -0.18]}>
    <mesh geometry={geometry} castShadow><meshStandardMaterial color="#1a1820" roughness={0.6} /></mesh>
    <mesh position={[0, 0.02, 0.103]} scale={[0.66, 0.7, 0.2]} geometry={geometry}><meshStandardMaterial color="#683186" roughness={0.9} /></mesh>
  </group>
}

function Cat() {
  const group = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const tail = useRef<THREE.Mesh>(null)
  const eyes = useRef<THREE.Group>(null)
  const target = useRef({ x: 0, y: 0 })
  const tailGeometry = useMemo(() => new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.6, -0.75, -0.38), new THREE.Vector3(1.08, -0.53, -0.57),
    new THREE.Vector3(1.22, 0.02, -0.68), new THREE.Vector3(1.05, 0.47, -0.61),
  ]), 32, 0.105, 8, false), [])
  useFrame(({ clock, pointer }, delta) => {
    if (!group.current || !head.current || !tail.current || !eyes.current) return
    const t = clock.elapsedTime
    target.current.x = THREE.MathUtils.clamp(pointer.x, -1, 1)
    target.current.y = THREE.MathUtils.clamp(pointer.y, -1, 1)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target.current.x * 0.17 - 0.12, 2, delta)
    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, target.current.x * 0.12 + Math.sin(t * 0.45) * 0.025, 2, delta)
    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, -target.current.y * 0.07, 2, delta)
    group.current.position.y = Math.sin(t * 1.4) * 0.015
    tail.current.rotation.x = Math.sin(t * 1.1) * 0.09
    const blink = Math.pow(Math.max(0, Math.sin(t * 1.7 + 2)), 28)
    eyes.current.scale.y = 1 - blink * 0.92
  })
  const fur = '#191820', highlight = '#24212c', lilac = '#b587d3'
  return <group ref={group} position={[0, -0.13, 0]}>
    <mesh position={[0, -0.64, -0.16]} scale={[0.8, 0.97, 0.66]} castShadow><sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color={fur} roughness={0.72} /></mesh>
    <mesh position={[0, -0.43, 0.43]} scale={[0.46, 0.63, 0.15]}><sphereGeometry args={[1, 24, 20]} /><meshStandardMaterial color={highlight} roughness={0.85} /></mesh>
    <mesh ref={tail} geometry={tailGeometry} castShadow><meshStandardMaterial color={fur} roughness={0.65} /></mesh>
    <mesh position={[1.05, 0.47, -0.61]} scale={[0.11, 0.13, 0.11]}><sphereGeometry args={[1, 16, 12]} /><meshStandardMaterial color="#54316e" /></mesh>
    {[-0.44, 0.44].map(x => <mesh key={x} position={[x, -1.39, 0.33]} scale={[0.28, 0.21, 0.38]} castShadow><sphereGeometry args={[1, 24, 16]} /><meshStandardMaterial color={fur} roughness={0.73} /></mesh>)}
    <group ref={head} position={[0, 0.54, 0.22]}>
      <mesh scale={[0.83, 0.72, 0.67]} castShadow><sphereGeometry args={[1, 40, 28]} /><meshStandardMaterial color={fur} roughness={0.64} /></mesh>
      <mesh position={[0, -0.24, 0.51]} scale={[0.54, 0.31, 0.21]}><sphereGeometry args={[1, 24, 16]} /><meshStandardMaterial color={highlight} roughness={0.82} /></mesh>
      <Ear side={-1} /><Ear side={1} />
      <group ref={eyes} position={[0, 0.05, 0.604]}>
        {[-0.31, 0.31].map(x => <group key={x} position={[x, 0, 0]}>
          <mesh scale={[0.19, 0.23, 0.07]}><sphereGeometry args={[1, 24, 16]} /><meshStandardMaterial color={lilac} emissive="#46165f" emissiveIntensity={0.25} roughness={0.3} /></mesh>
          <mesh position={[x < 0 ? 0.03 : -0.03, 0, 0.058]} scale={[0.055, 0.185, 0.03]}><sphereGeometry args={[1, 16, 12]} /><meshStandardMaterial color="#100e14" /></mesh>
          <mesh position={[-0.057, 0.075, 0.077]} scale={[0.034, 0.04, 0.014]}><sphereGeometry args={[1, 12, 8]} /><meshBasicMaterial color="#ffffff" /></mesh>
        </group>)}
      </group>
      <mesh position={[0, -0.24, 0.696]} rotation={[0, 0, Math.PI]} scale={[0.1, 0.075, 0.045]}><coneGeometry args={[1, 1, 3]} /><meshStandardMaterial color="#5216e4" roughness={0.5} /></mesh>
      {[-1, 1].map(side => <group key={side} position={[side * 0.2, -0.3, 0.68]}>
        {[-0.08, 0.03, 0.14].map((y, i) => <mesh key={i} position={[side * 0.34, y, 0]} rotation={[0, 0, side * (i - 1) * 0.16]}><cylinderGeometry args={[0.006, 0.006, 0.69, 6]} /><meshStandardMaterial color="#8a8292" /></mesh>)}
      </group>)}
    </group>
    <mesh position={[0, -0.05, 0.56]} scale={[0.57, 0.065, 0.54]}><torusGeometry args={[1, 0.1, 8, 48]} /><meshStandardMaterial color="#5216e4" metalness={0.25} roughness={0.4} /></mesh>
    <mesh position={[0, -0.22, 0.82]} scale={[0.12, 0.12, 0.045]}><sphereGeometry args={[1, 16, 12]} /><meshStandardMaterial color="#5216e4" metalness={0.45} roughness={0.3} /></mesh>
  </group>
}

export default function CatScene() {
  return <Canvas aria-hidden="true" camera={{ position: [0, 0.18, 5.3], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
    <ambientLight intensity={1.8} />
    <directionalLight position={[-3, 5, 5]} intensity={2.5} color="#ffffff" />
    <pointLight position={[3, 2, -1]} intensity={22} distance={7} color="#5216e4" />
    <Cat />
  </Canvas>
}

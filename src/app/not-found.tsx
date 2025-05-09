'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

const isMobile = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const BoxWithEdges = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial
          color="#000000" // Darker, less vibrant blue
          roughness={0.1}
          metalness={0.8}
          transparent={true}
          opacity={0.9}
          transmission={0.5}
          clearcoat={1}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.5, 0.5, 0.5)]} />
        <lineBasicMaterial color="#000000" linewidth={2} /> // Darker line edges
      </lineSegments>
    </group>
  )
}

interface BoxNumberProps {
  number: '4' | '0'
  position: [number, number, number]
}

const BoxNumber = ({ number, position }: BoxNumberProps) => {
  const group = useRef<THREE.Group>(null)

  const getNumberShape = (number: '4' | '0'): number[][] => {
    const shapes: { [key: string]: number[][] } = {
      '4': [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 1],
      ],
      '0': [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    }
    return shapes[number] || shapes['0']
  }

  const numberShape = getNumberShape(number)

  return (
    <group ref={group} position={position}>
      {numberShape.map((row, i) =>
        row.map((cell, j) => {
          if (cell) {
            const xOffset = j * 0.5 - (numberShape[0].length - 1) * 0.25
            return <BoxWithEdges key={`${i}-${j}`} position={[xOffset, (4 - i) * 0.5 - 1, 0]} />
          }
          return null
        }),
      )}
    </group>
  )
}

const Scene = () => {
  const orbitControlsRef = useRef(null)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  return (
    <>
      <group position={[0, 0, 0]} rotation={[0, Math.PI / 1.5, 0]}>
        <BoxNumber number="4" position={[-3, 0, 0]} />
        <BoxNumber number="0" position={[-1, 0, 0]} />
        <BoxNumber number="4" position={[1, 0, 0]} />
      </group>

      <OrbitControls
        ref={orbitControlsRef}
        enableZoom
        enablePan
        enableRotate
        autoRotate
        autoRotateSpeed={2}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />

      <Environment
        files={
          isMobileDevice
            ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download3-7FArHVIJTFszlXm2045mQDPzsZqAyo.jpg'
            : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dither_it_M3_Drone_Shot_equirectangular-jpg_San_Francisco_Big_City_1287677938_12251179%20(1)-NY2qcmpjkyG6rDp1cPGIdX0bHk3hMR.jpg'
        }
        background
      />
    </>
  )
}
export default function NotFound() {
  return (
    <div className="relative h-screen w-full bg-background">
      <Canvas camera={{ position: [10, 0, -11], fov: 50 }}>
        <Scene />
      </Canvas>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">Page Not Found</h1>
        <p className="mb-6 text-neutral-900">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-background px-6 py-3 text-base font-medium text-primary transition-colors duration-150"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

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
          color="#0a2e63" // Darker, less vibrant blue
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
        <lineBasicMaterial color="#153b7a" linewidth={2} /> // Darker line edges
      </lineSegments>
    </group>
  )
}

interface BoxLetterProps {
  letter: 'N' | 'E' | 'X' | 'T'
  position: [number, number, number]
}

const BoxLetter = ({ letter, position }: BoxLetterProps) => {
  const group = useRef<THREE.Group>(null)

  const getLetterShape = (letter: 'N' | 'E' | 'X' | 'T'): number[][] => {
    const shapes: { [key: string]: number[][] } = {
      N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
      E: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      X: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
      ],
      T: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
    }
    return shapes[letter] || shapes['N']
  }

  const letterShape = getLetterShape(letter)

  return (
    <group ref={group} position={position}>
      {letterShape.map((row, i) =>
        row.map((cell, j) => {
          if (cell) {
            let xOffset =
              j * 0.5 -
              (letter === 'T'
                ? 1
                : letter === 'E'
                  ? 0.5
                  : letter === 'X' || letter === 'N'
                    ? 1
                    : 0.75)

            if (letter === 'N') {
              if (j === 0) {
                xOffset = -0.5
              } else if (j === 1) {
                xOffset = 0
              } else if (j === 2) {
                xOffset = 0.25
              } else if (j === 3) {
                xOffset = 0.5
              } else if (j === 4) {
                xOffset = 1
              }
            }

            if (letter === 'X') {
              if (j === 0) {
                xOffset = -1
              } else if (j === 1) {
                xOffset = -0.75
              } else if (j === 2) {
                xOffset = -0.25
              } else if (j === 3) {
                xOffset = 0.25
              } else if (j === 4) {
                xOffset = 0.5
              }
            }

            return (
              <BoxWithEdges
                key={`<span class="math-inline">\{i\}\-</span>{j}`}
                position={[xOffset, (4 - i) * 0.5 - 1, 0]}
              />
            )
          }
          return null
        }),
      )}
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
            return (
              <BoxWithEdges
                key={`<span class="math-inline">\{i\}\-</span>{j}`}
                position={[xOffset, (4 - i) * 0.5 - 1, 0]}
              />
            )
          }
          return null
        }),
      )}
    </group>
  )
}

const Scene = () => {
  const orbitControlsRef = useRef(null) // Let TypeScript infer the type
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

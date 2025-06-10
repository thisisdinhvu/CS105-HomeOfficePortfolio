import { useFrame } from '@react-three/fiber'
import React, { useMemo, useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useToggleRoomStore } from '../stores/toggleRoomStore.js'

const Plane = ({ position, planeDepth, planeWidth }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const { isHomeOffice2, isTransitioning } = useToggleRoomStore()


  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#ffffff",
      emissive: "#ffffff",
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0,
    })
  }, [])

  useEffect(() => { 
    if (!meshRef.current) return;

    const material = meshRef.current.material;
    const targetColor = isHomeOffice2 ? "#ffffff" : "#000000";
    const targetColorObj = new THREE.Color(targetColor);

    gsap.to(material.color, {
      r: targetColorObj.r,
      g: targetColorObj.g,
      b: targetColorObj.b,
    });
    gsap.to(material.emissive, {
      r: targetColorObj.r,
      g: targetColorObj.g,
      b: targetColorObj.b,
    })
  }, [isHomeOffice2])

  useFrame(() => {
    if (!meshRef.current) return;
    const targetOpacity = hovered ? 0.8 : 0;
    let lerpFactor = hovered ? 0.1 : 0.03; // Faster when hovered, slower when not
    if (isTransitioning) {
      lerpFactor = 0.15
    }
    setOpacity(THREE.MathUtils.lerp(opacity, targetOpacity, lerpFactor))
    meshRef.current.material.opacity = opacity
    meshRef.current.emissiveIntensity = hovered ? 1.5 : 0.8;
  })

  return (<mesh
    ref={meshRef}
    position={position}
    rotation={[-Math.PI / 2, 0, 0]}
    material={material}
    onPointerMove={() => {
      if (isTransitioning) return;
      setHovered(true)
    }}
    onPointerOut={() => {
      setHovered(false)
     }}
    >
    <planeGeometry args={[planeDepth, planeWidth]} />
  </mesh>
    )
  }
  

const GridPlanes = ({ rows, columns, planeWidth, planeDepth, spacing, ref }) => {

  const gridWidth = columns * (planeWidth + spacing) - spacing;
  const gridDepth = columns * (planeDepth + spacing) - spacing;

  const startX = planeWidth / 2 - gridWidth / 2
  const startZ = planeDepth / 2 - gridDepth / 2

  const planes = []

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const x = startX + column * (planeWidth + spacing);
      const z = startZ + row * (planeDepth + spacing);

      planes.push(
        <Plane
          key={`${row}-${column}`}
          planeDepth={planeDepth}
          planeWidth={planeWidth}
          position={[x, 0.011, z]} 
        />
      )

    }
  }
  return (
    <>
      <group ref={ref}>{planes}</group>
    </>
  )
}

export default GridPlanes

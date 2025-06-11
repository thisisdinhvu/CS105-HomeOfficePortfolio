import React, { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

import HomeOffice2 from './models/HomeOffice2_v5' // NEW
// import HomeOffice3 from './models/HomeOffice5_v1' // NEW
// import HomeOffice3 from './models/HomeOffice2_n_v2' 
import HomeOffice3 from './models/HomeOffice5_v2' // No hitbox but OK
// import HomeOffice2 from './models/HomeOffice5-4'


import { useFrame } from '@react-three/fiber'
import GridPlanes from './components/GridPlanes'
import { useToggleRoomStore } from './stores/toggleRoomStore'

const HomeOffice2GroupPosition = new THREE.Vector3(0, 0, 0)
const HomeOffice3GroupPosition = new THREE.Vector3(0, 0, -21)

const Scene = ({ pointerRef }) => {
  // const groupRef = useRef()
  const HomeOffice2groupRef = useRef()
  const HomeOffice3groupRef = useRef()
  const gridPlanesRef = useRef()

  const groupRotationRef = useRef(0)
  const { isHomeOffice2 } = useToggleRoomStore()

  useEffect(() => {
    if (!gridPlanesRef.current) return

    const targetPosition = isHomeOffice2
      ? HomeOffice2GroupPosition
      : HomeOffice3GroupPosition;
    
    gsap.to(gridPlanesRef.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      delay: 1,
    });
  }, [isHomeOffice2])

  useFrame(() => {
    if (
      !HomeOffice2groupRef.current ||
      !HomeOffice3groupRef.current ||
      !gridPlanesRef.current)
      return;
    // console.log(camera.current.position)
    // console.log(camera.current.rotation)
    // console.log(camera.current.zoom)

    const targetRotation = pointerRef.current.x * Math.PI * 0.03;
    
    // console.log(pointerRef);
 
    groupRotationRef.current = THREE.MathUtils.lerp(
      groupRotationRef.current,
      targetRotation,
      0.05
    )

    HomeOffice2groupRef.current.rotation.y = groupRotationRef.current;
    HomeOffice3groupRef.current.rotation.y = groupRotationRef.current;
    gridPlanesRef.current.rotation.y = groupRotationRef.current;
  });

  return (
    <>
      <Suspense>
        <group ref={HomeOffice2groupRef}>
          <HomeOffice2 />
        </group>
        <group ref={HomeOffice3groupRef} position={HomeOffice3GroupPosition}>
          <HomeOffice3
            position={[
              HomeOffice3GroupPosition.x,
              HomeOffice3GroupPosition.y,
              HomeOffice3GroupPosition.z
            ]}
          />
        </group>
        <GridPlanes
          position={
            isHomeOffice2
              ? [
                  HomeOffice2GroupPosition.x,
                  HomeOffice2GroupPosition.y,
                  HomeOffice2GroupPosition.z,
                ]
              : [
                  HomeOffice3GroupPosition.x,
                  HomeOffice3GroupPosition.y,
                  HomeOffice3GroupPosition.z,
                ]
          }
          ref={gridPlanesRef}
            rows={30}
            columns={30}
            planeWidth={3}
            planeDepth={3}
            spacing={0} />
      </Suspense>
    </>
  )
}

export default Scene



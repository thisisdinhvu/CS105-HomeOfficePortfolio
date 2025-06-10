import React, {useEffect, useRef} from 'react'
import Scene from './Scene'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { useToggleRoomStore } from './stores/toggleRoomStore'
import { useResponsiveStore } from './stores/useResponsiveStore'
import { useExperienceStore } from './stores/experienceStore'


const Experience = () => {
  const cameraRef = useRef()
  const pointerRef = useRef({ x: 0, y: 0 })
  
  const { isExperienceReady } = useExperienceStore()

  const { isMobile } = useResponsiveStore()

  const { isHomeOffice2, setIsBeforeZooming, setIsTransitioning } = useToggleRoomStore()

  const cameraPositions = {
    homeOffice2: {
      position: [
        5.392573642047693 * 1.5,
        3.2041443543454298 * 1.5,
        6.213513726222436 * 1.5,
      ],
    },
    homeOffice3: {
      position: [ 
        12.611654916864675,
        7.31301397545575,
        -26.59738459162993
      ]
    },
  }

  const zoomValues = {
    default: isMobile ? 110 : 120,
    animation: isMobile ? 100 : 110,
  }

    useEffect(() => {
      if (!cameraRef.current) return;
      
      const targetPosition = isHomeOffice2
      ? cameraPositions.homeOffice2.position
      : cameraPositions.homeOffice3.position;

      gsap.set(cameraRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
      })
  }, [isExperienceReady])
  
  useEffect(() => {
    if (!cameraRef.current) return;

    zoomValues.default = isMobile ? 110 : 120;
    zoomValues.animation = isMobile ? 100 : 110;

    cameraRef.current.zoom = zoomValues.default;
    cameraRef.current.updateProjectionMatrix();
  }, [isMobile])


  useEffect(() => {
      if (!cameraRef.current) return;
          
      const targetPosition = isHomeOffice2
        ? cameraPositions.homeOffice2.position
        : cameraPositions.homeOffice3.position;

    const t1 = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false)
      }
    })
      t1.to(cameraRef.current, {
        zoom: zoomValues.animation,
        duration: 1,
        ease: "power3.out",
        onStart: () => {
          setIsTransitioning(true);
          setIsBeforeZooming(true);
        },
        onUpdate: () => {
          cameraRef.current.updateProjectionMatrix()
        },
      })
        .to(cameraRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
          z: targetPosition[2],
          duration: 1.5,
          ease:"power3.out"
        })
        .to(cameraRef.current, {
          zoom: zoomValues.default,
          duration: 1,
          ease: "power3.out",
          onStart: () => {
            setIsBeforeZooming(false);
          },
          onUpdate: () => {
            cameraRef.current.updateProjectionMatrix()
          }
        })
  }, [isHomeOffice2])

  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        pointerRef.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1
        pointerRef.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('touchmove', onTouchMove)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.addEventListener('touchmove', onTouchMove)
    }
  })

  return (
    <>
      <Canvas style={{position: "fixed", zIndex: 1, top: 0, left: 0}}>
        <OrthographicCamera
          ref={cameraRef}
          makeDefault
          position={cameraPositions.homeOffice2.position}
          rotation={[-0.41048145695907634,  0.672164060040656, 0.2646371259497191]} // HomeOffice2
          zoom={zoomValues.default} />
          {/* <OrbitControls />  */}
        <Scene camera={cameraRef}
          pointerRef={pointerRef}
          isExperienceReady={isExperienceReady}/>
      </Canvas>
    </>
  )
}

export default Experience
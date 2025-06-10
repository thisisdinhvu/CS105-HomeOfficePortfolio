import React, { useEffect } from 'react'
import './App.scss'
import RoomToggleButton from './components/Button/RoomToggleButton'
import Experience from './Experience/Experience'
import { useResponsiveStore } from './Experience/stores/useResponsiveStore'
import { Outlet } from 'react-router'
import LoadingPage from './Experience/pages/LoadingPage/LoadingPage'
import Router from './Experience/routes/Router'
import Menu from './components/Menu/Menu'
import Overlay from './components/Overlay/Overlay'
// import Logo from './components/Logo/Logo'

function App() {
  const { updateDimensions } = useResponsiveStore()

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  })
  return (
    <>
      <Menu />
      {/* <Logo /> */}
      <LoadingPage />
      <RoomToggleButton />
      <Overlay />
      <Router/>
      <Experience />  
    </>
  )
}

export default App

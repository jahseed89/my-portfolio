import React from 'react'
import { Outlet } from 'react-router-dom'
import './landingLayout.scss'
import NavBar from '../components/nav/NavBar'

const LandingLayout = () => {
  return (
    <div className='main-panel'>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default LandingLayout
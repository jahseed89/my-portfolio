import React from 'react'
import { Outlet } from 'react-router-dom'
import './landingLayout.scss'

const LandingLayout = () => {
  return (
    <div className='main-panel'>
        <Outlet />
    </div>
  )
}

export default LandingLayout
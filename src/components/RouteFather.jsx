import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteFather = () => {
  return (
    <div>
      <Outlet />
      <h2>Soy la ruta Padre</h2>
    </div>
  )
}

export default RouteFather
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()

  const goToContact = () => navigate('/contact')

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={goToContact}>Go to Contact</button>
    </div>
  )
}

export default AboutUs
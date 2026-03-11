import hero1 from "../assets/hero1.jpg"

import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* <img className="img-fluid" src={hero1} alt="hero" /> */}
      <div className="hero-section text-white text-center py-5">
        <h1 className="fw-bold">Welcome to Student Dashboard</h1>
        <p>Manage student records efficiently</p>
      </div>
    </div>
      )
}

      export default Hero
import React from 'react'
import "./hero.scss"
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_img from "../assets/hero_image.png"

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-left">
        <h3>New Arrivals Only</h3>
         <div className="hero-left-content">
            <h1>
                new <img src={hand_icon} alt="" /> <br />
                collections <br />
                for everyone.
            </h1>
         </div>
         <button>Latest Collection <img src={arrow_icon} alt="" /></button>
      </div>
      <div className="hero-right">
            <img src={hero_img} alt="" />
      </div>
    </section>
  )
}

export default Hero

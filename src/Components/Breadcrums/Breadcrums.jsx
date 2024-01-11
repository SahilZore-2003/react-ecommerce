import React from 'react'
import "./Breadcrums.scss"
import arrow_icon from "../assets/breadcrum_arrow.png"

const Breadcrums = ({category,name}) => {
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {category} 
      <img src={arrow_icon} alt="" />
      {name}

    </div>
  )
}

export default Breadcrums

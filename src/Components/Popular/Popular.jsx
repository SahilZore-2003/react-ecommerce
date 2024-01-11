import React from 'react'
import "./popular.scss"
import data_product from "../assets/data"
import Items from "../Items/Items"
const Popular = () => {
  return (
    <div className='popular'>
      <h1 className='center'>POPULAR IN WOMAN</h1>
      <hr />
      <div className="popular-items">
        {
          data_product.map((item, index) => <Items id={item.id} key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />)
        }
      </div>
    </div>
  )
}

export default Popular

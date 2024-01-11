import React, { useContext } from 'react'
import "./Styles/ShopCategory.scss"
import { ShopContex } from '../context/ShopContex'
import dropdown_icon from "../Components/assets/dropdown_icon.png"
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContex);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcotegory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((item,index)=>{
            if(item.category == props.category){
              return(
                <Items id={item.id} key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
              )
            }else{
              return null
            }
          })
        }
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

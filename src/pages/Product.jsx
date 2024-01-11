import React,{useContext} from 'react'
import { ShopContex } from '../context/ShopContex'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {productId} = useParams();
  const {all_product} = useContext(ShopContex)

 const selectedproduct = all_product.find((product)=> product.id === Number(productId))

 const {id,name,category,image,new_price,old_price} = selectedproduct;
 
  return (
    <div className='product'>
     <Breadcrums category={category} name={name} />
     <ProductDisplay id={id} image={image} name={name} old_price={old_price} new_price={new_price}  />
    </div>
  )
}

export default Product

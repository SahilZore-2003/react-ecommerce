import React from 'react'
import "./ProductDisplay.scss"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import DescriptionBox from '../DescriptionBox/DescriptionBox'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import { useContext } from 'react'
import { ShopContex } from '../../context/ShopContex'

const ProductDisplay = ({id,image,name,old_price,new_price}) => {

    const changeSize = (e)=>{
        const sizes = document.querySelectorAll("#sizes div");
        sizes.forEach((e)=>e.classList.remove("activesize"))
        e.target.classList.add("activesize")
    }

    const {addToCart} = useContext(ShopContex);

    return (
        <>
        <div className='product-display'>
            <div className="left">
                <div className="image-list">
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                </div>
                <div className="main-img">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{name}</h1>
                <div className="star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(340)</p>
                </div>
                <div className="prices">
                    <div className="old-price">${old_price}</div>
                    <div className="new-price">${new_price}</div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis repellat aut voluptate harum?
                </div>
                <div className="size-container">
                    <h1>Select Size</h1>
                    <div className="sizes" id='sizes'>
                        <div onClick={changeSize}>S</div>
                        <div onClick={changeSize} className='activesize'>M</div>
                        <div onClick={changeSize}>L</div>
                        <div onClick={changeSize}>XL</div>
                        <div onClick={changeSize}>XXL</div>
                    </div>
                </div>
                <button onClick={()=>addToCart(`${id}`)}>ADD TO CART</button>
                <div className="right-category">
                    <span>Category:</span> Woman, Tshirt, Crop Top
                </div>
                <div className="right-category">
                    <span>Tags:</span>Modern Latest
                </div>
            </div>
        </div>
        <DescriptionBox />
        <RelatedProducts />
        </>
        
    )
}

export default ProductDisplay

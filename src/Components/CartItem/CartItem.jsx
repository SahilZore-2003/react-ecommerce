import React, { useContext } from 'react'
import "./cartitem.scss"
import { ShopContex } from '../../context/ShopContex'
import remove_icon from "../assets/cart_cross_icon.png"


const CartItem = () => {
    const {getTotalAmount, all_product, cartItem, removefromCart,setShowmodel } = useContext(ShopContex);

    return (
        <div className='cartitem'>
            <div className="main-format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quntity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((e, i) => {
                    if (cartItem[e.id] > 0) {
                        return (
                            <>
                            <div className='format' key={i}>
                                <img src={e.image} alt="" className="product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button>{cartItem[e.id]}</button>
                                <p>${e.new_price *cartItem[e.id] }</p>
                                <img src={remove_icon} onClick={()=>removefromCart(`${e.id}`)} className='cross' alt="" />
                            </div>
                            <hr />
                            </>
                            
                        )
                    }
                    return null;
                })
            }


            <div className="cartitems-down">
                <div className="total">
                    <h1>Carts Total:</h1>
                    <div>
                        <div className="total-items">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className='total-items'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total-items">
                            <h3>Total:</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={()=>setShowmodel(true)}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promo-code">
                    <p>if you have a promo code? enter it here.</p>
                    <div className="promo-box">
                        <input type="text" name="" id="" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem

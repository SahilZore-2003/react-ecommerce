import React, { createContext } from 'react'
import all_product from "../Components/assets/all_product"
import { useState } from 'react';


export const ShopContex = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;

}


const ShopContexProvider = (props) => {

    const [cartItem, setCartitem] = useState(getDefaultCart())
    const [showmodel,setShowmodel ] = useState(false)


    const addToCart = (itemId) => {
        setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }


    const removefromCart = (itemId) => {
        setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItem){   
            if(cartItem[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalAmount+=iteminfo.new_price*cartItem[item]
            }  
        }
        return totalAmount;

    }

    const getTotalcartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItems+=cartItem[item]

            }   
        }
        return totalItems;
    }

    const contexValue = {getTotalcartItems,getTotalAmount,all_product, cartItem, addToCart, removefromCart, showmodel,setShowmodel };

    return (
        <ShopContex.Provider value={contexValue}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider;
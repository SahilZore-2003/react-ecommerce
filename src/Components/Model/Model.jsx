import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Model.scss"
import { ShopContex } from '../../context/ShopContex'

const Model = () => {
    const { showmodel,setShowmodel,getDefaultCart } = useContext(ShopContex);
    return (
        <>
            {
                showmodel ? <div className='model-container'>
                    < div >
                        <h2>Thanks for Shopping!</h2>
                        <p>
                            We will deliverd your order to you very soon!
                        </p>
                        <Link onClick={()=>{setShowmodel(false);getDefaultCart()}} to={"/"}>Back</Link>
                    </ div>
                </div > : null
            }
        </>
    )
}

export default Model

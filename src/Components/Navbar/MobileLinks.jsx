import React from 'react'
import "./MobileLinks.scss"
import { NavLink } from 'react-router-dom'

const MobileLinks = ({shownav,setShownav}) => {
    return (
        <div className='mobilelinks' style={shownav ?{transform:"translateX(0%)"} :{transform:"translateX(-100%)"}}>
            <NavLink onClick={()=>setShownav(false)} to="/">Shop</NavLink>
            <NavLink onClick={()=>setShownav(false)} to="men">Men's</NavLink>
            <NavLink onClick={()=>setShownav(false)} to="women">Women's</NavLink>
            <NavLink onClick={()=>setShownav(false)} to="kid">Kids</NavLink>
        </div>
    )
}

export default MobileLinks

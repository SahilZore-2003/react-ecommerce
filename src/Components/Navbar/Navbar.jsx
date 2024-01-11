import React, { useContext, useState } from 'react'
import "./navbar.scss"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { NavLink, Link } from "react-router-dom"
import { ShopContex } from '../../context/ShopContex'
import { FaBars } from "react-icons/fa6";
import MobileLinks from './MobileLinks'

const Navbar = () => {
  const [shownav, setShownav] = useState(false)
  const { getTotalcartItems } = useContext(ShopContex)

  var prevScrollpos = window.pageYOffset;

  window.addEventListener("scroll", () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-scroll").style.top = "0";
    } else {
      document.getElementById("nav-scroll").style.top = "-84px";
    }
    prevScrollpos = currentScrollPos;

  })
  return (
    <>
      <nav  id='nav-scroll'>
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/"><span>Shopper</span></Link>
        </div>
        <ul>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="men">Men's</NavLink>
          <NavLink to="women">Women's</NavLink>
          <NavLink to="kid">Kids</NavLink>
        </ul>
        <div className="cart">
          <Link to="/login"><button>Login</button></Link>
          <div>
            <span className="cartitems">{getTotalcartItems()}</span>
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
          </div>
          <FaBars id='navicon' onClick={() => setShownav(!shownav)} />
        </div>
      </nav>
      <MobileLinks shownav={shownav} setShownav={setShownav} />
    </>

  )
}

export default Navbar;

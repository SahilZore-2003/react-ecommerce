import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from './pages/Cart'
import LoginSignup from "./pages/LoginSignup"
import Footer from './Components/Footer/Footer'
import men_banner from "./Components/assets/banner_mens.png"
import women_banner from "./Components/assets/banner_women.png"
import kid_banner from "./Components/assets/banner_kids.png"
import Model from './Components/Model/Model'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Model />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App

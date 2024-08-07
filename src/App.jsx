import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Component/Footer/Footer'
import Login from './Component/Login/Login'
import Aboutus from './Component/Aboutus/Aboutus'


const App = () => {
  const[showLogin,setShowLogin]= useState(false)
  return (
    <> 
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
        <div className='app'>
    <Navbar setShowLogin={setShowLogin} /> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )

}
export default App 




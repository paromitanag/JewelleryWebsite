import React,{useContext, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assests'
import { StoreContext } from '../../Context/Storecontext'
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("Home");
    const{getTotalCartAmount}= useContext(StoreContext);
  return (
    <div className='navbarr'>
        <img src={assets.logo} alt="" className='logoo'/>
        <ul className="navbarr-menu">
        <Link to='/' onClick={()=>{setMenu("home")}}>Home {menu==="home"?<hr/>:<></>} </Link>
        <Link to='/aboutus' onClick={()=>{setMenu("aboutus")}}>AboutUs {menu==="aboutus"?<hr/>:<></>} </Link>
        <a href='#explore-item' onClick={()=>{setMenu("item")}}>Product  {menu==="item"?<hr/>:<></>}</a>
        <a href='#footer' onClick={()=>{setMenu("contactus")}}>ContactUs{menu==="contactus"?<hr/>:<></>}</a>
        </ul>
        <div className="navbarr-right">
            <img src={assets.search} alt="" className='searchh'/>
            <div className=" navbarr-search-icon">
               <Link to='/cart'> < img src={assets.cart} alt="" className='cartt'/></Link>
                <div className={getTotalCartAmount()===0?" ":"dot"}> 

                </div>
                <button onClick={()=>setShowLogin(true)}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
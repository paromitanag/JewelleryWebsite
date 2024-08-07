import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assests'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo-footer'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi voluptates placeat exercitationem, totam debitis deleniti ducimus provident unde illum est, harum vel asperiores quibusdam. In amet ratione commodi cupiditate.</p>
                <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.instagram} alt="" />
                <img src={assets.whatsapp} alt="" />
                </div>
                
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>Aboutus</li>
            <li>Privacy policy</li>
            <li>Delivery</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>91 546564354</li>
                    <li>contact365@tyd.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 Tomato.com-All Right Reserved</p>
    </div>
  )
}

export default Footer
import React from 'react'
import './Appdownload.css';
import { assets } from '../../assets/assests';
const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
      <p>For Better Experience Download <br/>Vironas App</p>
      <div className="app-download-platform">
        <img src={assets.appstore} alt="" />
        <img src={assets.playstore} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
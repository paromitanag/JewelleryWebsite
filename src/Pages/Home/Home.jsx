import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import Exploreitem from '../../Component/Exploreitem/Exploreitem'
import Productdisplay from '../../Component/Productdisplay/Productdisplay'
import Appdownload from '../../Component/Appdownload/Appdownload'



const Home = () => {

  const [category,setcategory]= useState("All");
    

  return (
    <div>
        <Header/>
        <Exploreitem category={category} setcategory={setcategory}/>
        <Productdisplay category={category}/>
        <Appdownload/> 
        
    </div>
  )
}

export default Home
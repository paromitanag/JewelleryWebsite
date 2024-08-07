import React from 'react'
import './Aboutus.css'
import { assets } from '../../assets/assests'
const Aboutus = () => {
  return (
   <div className="aboutus" id='aboutus'>
    <div className="bannerr">
      <img src={assets.banner} alt="" className='bannerr-img'/>
      <div className="about-container">
        
      </div>
    </div>
    <div className="about-body">
      <div className="about-para">
      <h1>Our Agency Story</h1>
      
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, adipisci?</h3>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt a ad earum provident animi reiciendis harum eius cupiditate ratione voluptates, porro voluptate molestias, quasi magni? Ipsam velit nostrum rerum!</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aut aperiam voluptatibus nulla ut unde placeat minus dicta asperiores commodi, officiis voluptatem tempore quidem quo mollitia, amet iure dolore. Quod.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, exercitationem odio. Velit at nulla quod quidem! Aliquam sunt tenetur veritatis, repudiandae ut, cumque nemo id dicta nihil eligendi quasi quod?</p>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rem distinctio provident neque obcaecati odio accusamus enim laudantium ad repellat recusandae non, illo inventore officia ipsa doloremque repellendus placeat tenetur!</p>      
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci libero quam ut quisquam totam cum doloribus, sunt nemo in odio aliquid commodi sint corrupti harum aspernatur inventore explicabo molestias!</p>    
              <button className='btn2'>More About Us</button>
             
    </div>
    
    <div className="about-poster">
                <img src={assets.img71} alt="" className='poster'/>
              </div>
</div>
   </div>
  )
}

export default Aboutus
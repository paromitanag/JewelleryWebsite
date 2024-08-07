import React from 'react'
import './Exploreitem.css'
import { item_list } from '../../assets/assests'

const Exploreitem = ({category,setcategory}) => {
  return (
    <div className='explore-item' id='explore-item'>
        <h1>Explore our product</h1>
    <p className='explore-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi, ipsam voluptatum laudantium perferendis consequuntur hic qui blanditiis nam. Recusandae, ut. Soluta velit accusamus ipsam vitae enim necessitatibus similique cupiditate.</p>
    <div className="explore-item-list">
        {item_list.map((item,index)=>{
            return(
                <div onClick={()=>setcategory(prev=>prev===item.item_name?"All":item.item_name)} key={index} className="explore-item-list-item">
                    <img className={category===item.item_name?"active":""} src={item.item_image} alt=""  />
                    <p>{item.item_name}item</p> 
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default Exploreitem
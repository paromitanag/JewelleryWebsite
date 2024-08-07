import React, { useContext } from 'react'
import './Productdisplay.css'
import { StoreContext } from '../../Context/Storecontext'
import Productitem from '../Productitem/Productitem'

const Productdisplay = ({category}) => {

    const {product_list}= useContext(StoreContext)

  return (
    <div className='product-display' id='product-display'>
        <h2>Most selling products</h2>
        <div className="product-display-list">
            {product_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                  return <Productitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default Productdisplay
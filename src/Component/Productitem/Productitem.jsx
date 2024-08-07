import React, { useContext} from 'react'
import './Productitem.css'
import { assets } from '../../assets/assests'
import { StoreContext } from '../../Context/Storecontext'
const Productitem = ({id,name,price,description,image}) => {


    const {cartItems,setCartItems,addToCart,removeToCart}= useContext(StoreContext);



  return (
    <div className='product-item'>
        <div className="product-item-img-container">
            <img className='product-item-image' src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add} alt='' />
                :<div className='product-item-counter'>
                    <img onClick={()=>removeToCart(id)} src={assets.remove} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add} alt=""/>
                </div>
            }
        </div>
    <div className="product-item-info">
        <div className="product-item-name-rating">
            <p>  {name}</p>
            <img src={assets.star} alt="" />
        </div>
        <p className="product-item-description">{description}</p>
        <p className="product-item-price">Rs{price}</p>
    </div>
    </div>
  )
}

export default Productitem
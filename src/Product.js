import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product(props) {
    const [{basket}, dispatch]=useStateValue()

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating
            }
        })
    }
    return (
        <div className="product">

            {/* <span>{props.id}</span> */}
            <div className="product__info">
            <span>{props.title}</span>
            <p className="product__price">
                <small>$</small>
                <strong>{props.price}</strong>
                
                </p>
            <div className="product__rating">
                {Array(props.rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
           
                {/* {props.rating}</div> */}
            
            </div>

            <img src={props.image}/>
            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    )
}

export default Product

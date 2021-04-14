import React from 'react'
import './Product.css'

function Product(props) {
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
                {Array(props.rating).fill().map((_)=>(
                    <p>⭐</p>
                ))}
            </div>
           
                {/* {props.rating}</div> */}
            
            </div>

            <img src={props.image}/>
            <button>Add to basket</button>
            
        </div>
    )
}

export default Product

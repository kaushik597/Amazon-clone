import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{basket}]=useStateValue();

    
    return (
        <div>
            {basket?.length === 0?(
            <div>
                <h2>Your shopping basket is empty</h2>
                <p>You have no items in your basket. To add one click on "Add to basket" next to the item</p>
            </div>
        ) : (
            <div >
                <h2 className="checkout__title">your shopping basket</h2>
                {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    raing={item.rating}/>
                ))}
            </div>
        )}
        </div>
        
    )
}

export default Checkout;

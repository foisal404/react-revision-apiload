import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    let {strCategory,strMeal}=props.cart;
    return (
        <div className='kart'>
            <h3>{strMeal}</h3>
        </div>
    );
};

export default Cart;
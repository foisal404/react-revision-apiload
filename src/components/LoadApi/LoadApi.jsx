import React, { useEffect, useState } from 'react';
import './LoadApi.css'
import Food from '../Food/Food';
import Cart from '../Cart/Cart';

const LoadApi = () => {
    // data load from Api 
    let [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res=>res.json())
            .then(data=>setFoods(data.meals))
    },[])
    let [carts,setCart]=useState([]);
    // click handele function
    const addFoodToCart=(id)=>{
        // ... destracturing must be in Array or object
        setCart([...carts,id])
    }
    
    return (
        <div className='top-banner'>
            <div className='food-group'>
                {
                    foods.map(food=> <Food key={food.idMeal} food={food} addFoodToCart={addFoodToCart}></Food>)
                }
            </div>
            <div className='Cart'>
                <h2>Cart Components</h2>
                {
                    carts.length?carts.map(cart=><Cart key={cart.idMeal} cart={cart}></Cart>):""
                }
            </div>

        </div>
    );
};

export default LoadApi;
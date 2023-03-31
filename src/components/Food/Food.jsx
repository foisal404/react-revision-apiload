import React from 'react';
import './Food.css'

const Food = (props) => {
    let {strMealThumb,idMeal,strCategory,strMeal}=props.food;
    let addFoodToCart=props.addFoodToCart;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h4 className='food-title'>{strMeal}</h4>
            <button onClick={()=>addFoodToCart(props.food)} className='add-btn'>Add Meal</button>
        </div>
    );
};

export default Food;
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => { // transform an object into array of the value of ingredients
    const transformedIngredients = Object.keys(props.ingredients)//Object is default JS object /  key method: returns array of keys    
        .map(ingredientKey => { // turns into array of that any elments as we have ingredients for given ingredient
            return [...Array(props.ingredients[ingredientKey])]  //construct new array (Array is default JS object that gives array)
                .map((_, i) => { //execute map on Array (still inside .map!) i for index that we need
                   return <BurgerIngredient key={ingredientKey + i} type= {ingredientKey} />
                });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
                {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;
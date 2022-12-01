import React from 'react'
import './Recipe.css'


function Recipe({ data }) {
    return (
        <div className="container">
            <div className='card'>   

                <img src={data.recipe.image} alt="recipe-img" />
                <h3>Cuisine Type : <span>{data.recipe.cuisineType}</span></h3>
                <h3>Dish Type : <span>{data.recipe.dishType}</span></h3>
                <h3>Meal Type : <span>{data.recipe.mealType}</span></h3>
                <h3>Source : <span>{data.recipe.source}</span></h3>
                <h3>cautions : <span>{data.recipe.cautions}</span></h3>

                 {/* <h3>Label : <span>{data.recipe.label}</span></h3> */}

            </div>

        </div>

    )
}

export default Recipe
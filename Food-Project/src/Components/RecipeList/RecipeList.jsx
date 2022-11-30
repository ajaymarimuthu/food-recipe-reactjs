import React from 'react'
import Recipe from '../Recipe/Recipe'
import './RecipeList.css'

function RecipeList({ handleClick, data }) {
    return (

        <>
            {/* <h1>Recipes</h1> */}
            <div className='recipelist'>

                {/* <button onClick={handleClick}>Click me</button> */}

                {data.map((item, index) => {
                    return <Recipe key={index} data={item} />
                })}

            </div>
        </>

    )
}

export default RecipeList
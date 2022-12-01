import React from 'react'
import Recipe from '../Recipe/Recipe'
import './RecipeList.css'

function RecipeList({ handleClick, data }) {
    // console.log(data);

    return (

        <>
            {/* <h1>Recipes</h1> */}
            <div className='recipelist'>

                {/* <button onClick={handleClick}>Click me</button> */}
                
                {data.map((data, index) => {
                    return <Recipe key={index} data={data} />
                })}

            </div>
        </>

    )
}

export default RecipeList
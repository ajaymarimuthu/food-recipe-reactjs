import React from 'react'
import './Navbar.css'

function Navbar({handleCuisine,handleClick,handleDishType,handleDiet}) {


    

    return (
        <div className='navbar'>

            <h1>Awesome Recipes</h1>

            <div className="option-group" >
                <select className='select' onChange={handleCuisine}  >
                    <option >Cuisine Type</option>
                    <option value="french">French</option>
                    <option value="american">American</option>
                    <option value="italian">Italian</option>
                    <option value="mediterranean">Mediterranean</option>

                    <option value="british">British</option>
                    <option value="nordian">Nordian</option>
                </select>
 
                 <select className='select' onChange={handleDishType}>
                    <option >Dish Type</option>
                    <option value="sandwiches">SandWiches</option>
                    <option value="starter">Starter</option>
                    <option value="soup">Soup</option>
                    <option value="main course">Main Course</option>

                    <option value="desserts">Desserts</option>
                    <option value="salad">Salad</option>
                </select>  

                <select className='select' onChange={handleDiet}>
                    <option >Diet</option>
                    <option value="balanced">Balanced</option>
                    <option value="high-protein”">High-protein</option>
                    <option value="high-fiber">High-fiber</option>
                    <option value="low-fat">Low-fat</option>
                    <option value="low-carb">Low-carb</option>
                    <option value="low-sodium">Low-sodium</option>
             
             
                </select>
                  
            </div>

            <button className='btn' onClick={handleClick}>Search</button>
    



        </div>
    )
}

export default Navbar
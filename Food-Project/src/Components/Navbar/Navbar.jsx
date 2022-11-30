import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>

            <h1>Awesome Recipes</h1>

            <div className="option-group">
                <select className='select'>
                    <option >Cuisine Type</option>
                    <option value="french">French</option>
                    <option value="american">American</option>
                    <option value="italian">Italian</option>
                    <option value="mediterranean">Mediterranean</option>

                    <option value="british">British</option>
                    <option value="nordian">Nordian</option>
                </select>

                <select className='select'>
                    <option >Dish Type</option>
                    <option value="sandwiches">SandWiches</option>
                    <option value="starter">Starter</option>
                    <option value="soup">Soup</option>
                    <option value="main course">Main Course</option>

                    <option value="desserts">Desserts</option>
                    <option value="salad">Salad</option>
                </select>

                <select className='select'>
                    <option >Cautions</option>
                    <option value="sulfites">Sulfites</option>
                    <option value="gluten">Gluten</option>
             
                </select>
                
            </div>

            <button className='btn'>Search</button>
    



        </div>
    )
}

export default Navbar
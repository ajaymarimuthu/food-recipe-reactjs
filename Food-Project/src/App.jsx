 
import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'; 
import RecipeList from './Components/RecipeList/RecipeList';
import Navbar from './Components/Navbar/Navbar';

function App() { 
  const YOUR_APP_ID='e00b6797';
  // const YOUR_APP_KEY= '3da659a8169379bbdf80d032c1728a12';
  const YOUR_APP_KEY= '7b35b7ae7579ac0ae01be16ff34d9806';

  const [data, setData] = useState([]);
  const [cuisine,setCuisine]=useState('');
  const [dish,setDish]=useState('');
  const [dietType,setDietType]=useState('');

  // const url=`https://api.edamam.com/search?q=onion&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free&cuisineType=${cuisine}`;
  // &dishType=${dishType}
  

  const url=`https://api.edamam.com/search?q=onion&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free&cuisineType=${cuisine}&dishType=${dish}&dietType=${dietType}`;
  // const url=`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`;
  
  



  const handleClick = async() =>{
    // console.log("Hi");
    
    var result= await Axios.get(url);
    // console.log("Hi");
    setData(result.data.hits)

     console.log("From log:",result.data.hits);

  }

  // console.log(data);

  // useEffect(()=>{
  //   handleClick();


  // },[])


  const handleCuisine = (e) =>{
    console.log(e.target.value);
    setCuisine(e.target.value);

  }

  const handleDishType = (e) =>{
    console.log(e.target.value);
    setDish(e.target.value);
  }

  const handleDiet = (e) =>{
    console.log(e.target.value);
    setDietType(e.target.value);
  }

 
  
  return (
    <div className="App">
 
      <Navbar handleCuisine={handleCuisine}  handleClick={handleClick}  handleDishType={handleDishType} handleDiet={handleDiet}/>
      {/* <Navbar handleCuisine={handleCuisine}  handleClick={handleClick} />  */}
       {/* <RecipeList handleClick={handleClick} data={data}/> */}
       <RecipeList data={data}/>
      
    
    </div>
  )
}

export default App

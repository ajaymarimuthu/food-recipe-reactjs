 
import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'; 
import RecipeList from './Components/RecipeList/RecipeList';
import Navbar from './Components/Navbar/Navbar';

function App() { 
  const YOUR_APP_ID='e00b6797';
  const YOUR_APP_KEY= '3da659a8169379bbdf80d032c1728a12';
  const url=`https://api.edamam.com/search?q=onion&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`;


  const [data, setData] = useState([]);
  // const [input,setInput]=useState('');


  const handleClick = async() =>{
    // console.log("Hi");

    var result= await Axios.get(url);
    setData(result.data.hits)

    console.log("From log:",result.data.hits);

  }

  useEffect(()=>{
    handleClick();


  },[])

  // console.log(data);
  
  return (
    <div className="App">

      <Navbar/>

       <RecipeList  data={data}/>

      
    
    </div>
  )
}

export default App

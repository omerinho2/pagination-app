import React , { useState , useEffect } from 'react';
import './App.css';

function App() {

  const [ items , setItems ] = useState([]);
  const [ visible , setVisible ] = useState(6);

  function showMoreMeals () {
    setVisible(item => item += 6)
  }
  
  useEffect (()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
    .then((res)=> res.json())
    .then((data)=> setItems(data.meals))
  },[])

  return (
    <div className="App">
      <h1 className='header'>British Meals <img src= "data:image/png;base64,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"/></h1>
      
      <div className='container'>
        {items.slice(0,visible).map(item => (
          <div className='card'>
            <div className='image'>
              <img src={item.strMealThumb}/>
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <button onClick={showMoreMeals}>Click for more Meals</button>
      </div>
    </div>
  );
}

export default App;

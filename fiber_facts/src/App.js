import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [nutrition, setNutrition] = useState([]);
  const [inputs, setInputs] = useState([]);

  async function fetchNutritionHandler() {
    const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dvHXrelaUtReddQBiicnlA0lFCApcAjTPgv7I7mm&query='+inputs);
    const data = await response.json();
    const transformedNutrition = await data.foods.map((nutritionData) => {
      return {
        openingText: nutritionData.description,
        title: nutritionData.brandOwner,
        id: nutritionData.fdcid,
        nutrients: [...nutritionData.foodNutrients.map(nut => [nut.nutrientName +': '+ nut.value+', '])]  }

    })
    setNutrition(transformedNutrition)}
    // console.log(transformedNutrition)
    // console.log(data.foods)

  
  const searchFoodHandler = (event) => {
    console.log(inputs)
    setInputs(event.target.value)
  }



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchNutritionHandler}>Fetch Nutrition Data</button>
      


    <input value={[inputs]}
        onChange={searchFoodHandler} 
        type="text"/>

      </section>
      <section>
        <MoviesList movies={nutrition} />
      </section>
    </React.Fragment>
  );
}

export default App;

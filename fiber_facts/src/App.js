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
        nutrients: [...nutritionData.foodNutrients.map(nut => [nut.nutrientName +': '+ nut.value+', '])],
        // nutrients:  [...nutritionData.foodNutrients.map(nut => [nut.nutrientName , nut.value])][0][0],
        fiber:  [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fiber, total dietary"), 1][0].value ,
        carbs: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Carbohydrate, by difference"), 1][0].value,
        sodium: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Sodium, Na"), 1][0].value, 
        potassium: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Potassium, K"), 1][0].value ,
        tot_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Total lipid (fat)"), 1][0].value,
        sat_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total saturated"), 1][0].value

        // .filter(nut.nutrientName==="Total lipid (fat)")
      
      }
        
    })

    console.log(transformedNutrition)
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

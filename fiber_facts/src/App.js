import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [nutrition, setNutrition] = useState([]);
  const [inputs, setInputs] = useState([]);

  async function fetchNutritionHandler() {
    const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dvHXrelaUtReddQBiicnlA0lFCApcAjTPgv7I7mm&dataType=Branded,Survey%20%28FNDDS%29&sortBy=dataType.keyword&sortOrder=desc&query='+inputs);
    const data = await response.json();
    console.log(data.foods)
    const transformedNutrition = await data.foods.map((nutritionData) => {
      // i want to loop through the values in nuts and create an object with a vernacular name as the key and foodNutrients.value as the key, and if nuts isn't in there just make the value 0
    //const nuts = ["Fiber, total dietary", "Carbohydrate, by difference", "Sodium, Na", "Total lipid (fat)",  "Fatty acids, total monounsaturated", "Fatty acids, total polyunsaturated"]
    //const filter = nutritionData.foodNutrients.filter(i => nuts.includes(i.nutrientName))
    //const funk = filter.map(x => x.nutrientName)
    //const funk1 = filter.map(x => x.value)
    

    return {
        openingText: nutritionData.description,
        title: nutritionData.brandOwner,
        id: nutritionData.fdcid,
        nutrients: [...nutritionData.foodNutrients.map(nut => [nut.nutrientName + ': ' + nut.value + ', '])],
        // nutrients:  [...nutritionData.foodNutrients.map(nut => [nut.nutrientName , nut.value])][0][0],
        nuts2: {
          fiber:  [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fiber, total dietary"), 1][0].value,
          fiberUnitName:  [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fiber, total dietary"), 1][0].unitName,
          carbs: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Carbohydrate, by difference"), 1][0].value,
          carbsUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Carbohydrate, by difference"), 1][0].unitName,
          sodium: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Sodium, Na"), 1][0].value, 
          sodiumUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Sodium, Na"), 1][0].unitName, 
          potassium: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Potassium, K"), 1][0].value,
          potassiumUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Potassium, K"), 1][0].unitName,
          tot_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Total lipid (fat)"), 1][0].value,
          tot_fatUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Total lipid (fat)"), 1][0].unitName,
          sat_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total saturated"), 1][0].value,
          sat_fatUniteName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total saturated"), 1][0].unitName,
          trans_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total trans"), 1][0].value,
          trans_fatUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total trans"), 1][0].unitName,
          mono_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total monounsaturated"), 1][0].value,
          mono_fatUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total monounsaturated"), 1][0].unitName,
          poly_fat: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total polyunsaturated"), 1][0].value,
          poly_fatUnitName: [...nutritionData.foodNutrients.filter(nut  => nut.nutrientName==="Fatty acids, total polyunsaturated"), 1][0].unitName
        },
        filtered: [...nutritionData.foodNutrients.map(nut => [[nut.nutrientName , nut.value]])],
        filtered2: [...nutritionData.foodNutrients.map(nut => { return [nut.nutrientName , nut.value]})],
        // filtered3: nutritionData.foodNutrients.filter(i => nuts.includes(i.nutrientName))
      }
    })
    
    console.log(transformedNutrition)
    setNutrition(transformedNutrition)
  }

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

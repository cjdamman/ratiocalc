import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  const [nutrition, setNutrition] = useState([]);

  async function fetchNutritionHandler() {
    const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dvHXrelaUtReddQBiicnlA0lFCApcAjTPgv7I7mm&query=Cheddar%20Cheese');
    const data = await response.json();
    const transformedNutrition = await data.foods.map((nutritionData) => {
      return {
        openingText: nutritionData.description,
        title: nutritionData.brandOwner,
        id: nutritionData.fdcid,
        nutrients: [...nutritionData.foodNutrients.map(nut => [nut.nutrientName +': '+ nut.value+', '])],  
        // avengers.map(avenger => avenger.name);

        // nutrients2: [...nutritionData.foodNutrients.nutrientName]
      }
    })
    // console.log(transformedNutrition)
    console.log(data.foods)
    setNutrition(transformedNutrition)





  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchNutritionHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={nutrition} />
      </section>
    </React.Fragment>
  );
}

export default App;

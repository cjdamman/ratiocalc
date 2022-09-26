import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={( movie.carbs / movie.fiber)}
          openingText={( movie.sodium / movie.potassium)}
          x={(movie.sat_fat / movie.tot_fat)}
          y={movie.nutrients}
          z={movie.openingText}
          W={movie.title}
        />
      ))}
    </ul>
  );
};

export default MovieList;

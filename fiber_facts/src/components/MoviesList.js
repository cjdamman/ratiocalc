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
          openingText={movie.nutrients}
          x={movie.sat_fat}
          
          releaseDate={movie.carbs}
        />
      ))}
    </ul>
  );
};

export default MovieList;

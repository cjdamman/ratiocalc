import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
                <Movie
          key={movie.id}
          FibRatio={( movie.nuts2.carbs / movie.nuts2.fiber)}
          SaltRatio={(movie.nuts2.sodium  / movie.nuts2.potassium || 0 )}
          salt= {movie.nuts2.sodium}
          k = {movie.nuts2.potassium}
          carbs = {movie.nuts2.carbs}
          fiber = {movie.nuts2.fiber}
          tot_fat = {movie.nuts2.tot_fat || 0}
          sat_fat = {movie.nuts2.sat_fat || 0}
          trans_fat = {movie.nuts2.trans_fat || 0}
          // FatRatio={(tot_fat1 / (tot_fat1 -(sat_fat1 + trans_fat1)))}
          FatRatio={(movie.nuts2.tot_fat / (movie.nuts2.tot_fat -((movie.nuts2.sat_fat || 0 )+ (movie.nuts2.trans_fat || 0))))}
          y={movie.nutrients}
          z={movie.openingText}
          W={movie.title}
          q={movie.filtered}
        />
      ))
      }
    </ul>
  );
};

export default MovieList;

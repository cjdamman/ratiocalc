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
          salt= {movie.nuts2.sodium || 0}
          saltUnitName= {movie.nuts2.sodiumUnitName || ''}
          k = {movie.nuts2.potassium || 0}
          kUnitName = {movie.nuts2.potassiumUnitName || ''}
          carbs = {movie.nuts2.carbs || 0}
          carbsUnitName = {movie.nuts2.carbsUnitName || ''}
          fiber = {movie.nuts2.fiber || 0}
          fiberUnitName = {movie.nuts2.fiberUnitName || ''}
          tot_fat = {movie.nuts2.tot_fat || 0}
          tot_fatUnitName = {movie.nuts2.tot_fatUnitName || ''}
          sat_fat = {movie.nuts2.sat_fat || 0}
          sat_fatUnitName = {movie.nuts2.sat_fatUnitName || ''}
          trans_fat = {movie.nuts2.trans_fat || 0}
          trans_fatUnitName = {movie.nuts2.trans_fatUnitName || ''}
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

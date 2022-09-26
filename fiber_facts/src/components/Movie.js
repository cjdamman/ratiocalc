import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2 className={(props.title) > 2 ? classes.green : classes.purp }>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.x}</p>
    </li>
  );
};

export default Movie;

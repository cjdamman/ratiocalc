import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h1>{props.z}</h1>
      <h2>{props.W}</h2>
      {/* <h2  >Ratios</h2> */}
      <table className={classes.tabley} >
        <th className={classes.tabley} > Fiber / Carb</th>
        <th className={classes.tabley} > Na / K</th>
        <th className={classes.tabley} > Sat Fat / Tot Fat</th>
        <tr>
          <td className={(props.title) > 10 ? classes.red : (props.title) > 5 ? classes.yellow : classes.green}> {Math.round(props.title)}</td>
          <td className={(props.openingText) > 10 ? classes.red : (props.openingText) > 5 ? classes.yellow : classes.green}> {Math.round(props.openingText)}</td>
          <td className={(props.x) > 10 ? classes.red : (props.x) > 5 ? classes.yellow : classes.green}> {(props.x).toFixed(2)}</td>
        </tr>
      </table>
     {/* <p>{props.y}</p> */}

    </li>
  );
};

export default Movie;

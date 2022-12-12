import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  let FibRatio =  props.FibRatio || 0
  let FatRatio =  props.FatRatio*4 || 0
  let SaltRatio =  props.SaltRatio*5 || 0
  return (
    <li className={classes.movie}>
      <h1>{props.z}</h1>
      <table className={classes.tabley} >
        <th className={classes.tabley} >{`Carbs ${props.carbs} / Fiber ${props.fiber}`} </th>
        <th className={classes.tabley} >{`(TFat ${props.tot_fat} / UnsatTat ${Math.round((props.tot_fat - (props.trans_fat + props.sat_fat))*100)/100}) * 4`} </th>
        <tr>
          <td className={(FibRatio) > 10 ? classes.red : (FibRatio) > 5 ? classes.yellow : (FibRatio) < 1 ? classes.purple : classes.green}> {Math.round(FibRatio)}</td>
          <td className={(FatRatio) > 10 ? classes.red : (FatRatio) > 5 ? classes.yellow : (FatRatio) < 1 ? classes.purple : classes.green}> {Math.round(FatRatio)}</td>
        </tr>
          <th className={classes.tabley} > {`(Salt ${props.salt} / Potassium ${props.k || 0}) * 5`} </th>
          <th className={classes.tabley}> Recommendation </th>
        <tr>
         <td className={(SaltRatio) > 10 ? classes.red : (SaltRatio) > 5 ? classes.yellow : classes.green}> {Math.round(SaltRatio)}</td>
         <td > {`SaltRatio ${Math.round(SaltRatio)} : FibRatio ${Math.round(FibRatio)} : FatRatio ${Math.round(FatRatio)}`} </td>
        </tr>
      </table>
     {/* <p>{props.y}</p> */}
    </li>
  );
};

export default Movie;

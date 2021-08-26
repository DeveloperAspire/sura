import React from 'react'
import classes from './Result.module.css'
import ResultItem from './ResultItem'


const Result =()=> {
      return (
        <div className={classes["result--container"]}>
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </div>
      );
}

export default Result
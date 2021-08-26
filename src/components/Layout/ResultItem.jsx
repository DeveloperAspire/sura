import React from 'react'
import classes from './ResultItem.module.css'

const ResultItem = ()=> {
      return (
        <div className={classes.container}>
          <p>https://www.google.com</p>
          <div>
            <a href="https://www.google.com" className={classes.link}>https://www.google.com</a>
            <button className={classes.button}>Copy</button>
          </div>
        </div>
      );

}

export default ResultItem
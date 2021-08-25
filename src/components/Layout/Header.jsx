import React from 'react'

import classes from './Header.module.css'

const Header = ()=> {

      return (
        <nav className={classes.navigation}>
          <div className={classes.info}>
            <h1>Shortex</h1>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className={classes['register--login']}>
            <p className={classes.button}>Login</p>
            <p className={`${classes.button} ${classes['sign--up']}`}>Sign Up</p>
          </div>
        </nav>
      );
}

export default Header
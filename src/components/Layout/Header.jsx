import React,{useState} from 'react'

import classes from './Header.module.css'
import menu from '../../images/hamburger.svg'

const Header = ()=> {
  const [showMenu, setShowMenu] = useState(false)
  const showMenuHandler = ()=> {
    setShowMenu(!showMenu)
  }

      return (
        <nav className={classes.navigation}>
          <h1 className={classes["mobile--heading"]}>Sura</h1>
          <img
            src={menu}
            alt=""
            className={classes.icon}
            onClick={showMenuHandler}
          />
          {showMenu && (
            <div className={classes["mobile--info"]}>
              <ul className={classes["mobile--menu"]}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
              <p className={classes["mobile--button"]}>Login</p>
              <p
                className={`${classes["mobile--button"]} ${classes["mobile-sign--up"]}`}
              >
                Sign Up
              </p>
            </div>
          )}

          <div className={classes.info}>
            <h1>Sura</h1>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className={classes["register--login"]}>
            <p className={classes.button}>Login</p>
            <p className={`${classes.button} ${classes["sign--up"]}`}>
              Sign Up
            </p>
          </div>
        </nav>
      );
}

export default Header
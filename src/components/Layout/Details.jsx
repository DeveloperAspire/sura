import  classes  from './Details.module.css'
import React from 'react'

const Details = ()=> {
  return (
    <section className={classes.container}>
      <div className={classes.head}>
        <h1> Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={classes["card--container"]}>
        <div className={classes["card-wrapper"]}>
          <div className={classes.card}>
            <div className={`${classes.icon} ${classes["icon--one"]}`}></div>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className={`${classes["card-wrapper"]} ${classes["card--two"]}`}>
          <div className={classes.card}>
            <div className={`${classes.icon} ${classes["icon--two"]}`}></div>
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className={`${classes["card-wrapper"]} ${classes["card--three"]}`}>
          <div className={classes.card}>
            <div className={`${classes.icon} ${classes["icon--three"]}`}></div>
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details
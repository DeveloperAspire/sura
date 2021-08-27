import React from 'react'

import classes from './Hero.module.css'
import image from '../../images/illustration-working.svg'

const Hero = () => {
 return (
   <>
   <main className={classes.hero}>
     <div className={classes["hero--description"]}>
       <h1>More than just shorter links</h1>
       <p className={classes.text}>
         Build your brand’s recognition and get detailed insights on how your
         links are performing.
       </p>
       <p className={classes.button}>Get Started</p>
     </div>
     <img src={image} alt="" className={classes.img} />
   </main>
   </>
 );
}

export default Hero
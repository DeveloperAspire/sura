import React,{useState} from 'react'
import classes from './Input.module.css'

const Input = ()=> {
       const [enteredUrl, setEnteredUrl] = useState('')
       const [urlIsValid, setUrlIsValid] = useState(true)
       const [urlIsTouched, setUrlIsTouched] = useState(false)
       

       const urlHandler=(e)=>{
         setEnteredUrl(e.target.value)
         setUrlIsTouched(false)
       }
       const blurHandler = ()=> {
            if(enteredUrl.trim() === ''){
                 setUrlIsValid(false)
                 setUrlIsTouched(true)
            }
       }

      const urlIsInvalid = urlIsTouched && !urlIsValid
      const urlClass = urlIsInvalid ? classes.error :'' 
      return (
        <div className={classes["form--background"]}>
          <form>
            <div>
              <input className={urlClass} type="url" placeholder="Shorten a link here..." onChange={urlHandler} onBlur={blurHandler} value={enteredUrl}/>
            </div>
            <button className={classes.button}>Shorten it!</button>
          </form>
          {urlIsInvalid && <p className={classes.error}>Please add a link</p>}
        </div>
      );
}

export default Input
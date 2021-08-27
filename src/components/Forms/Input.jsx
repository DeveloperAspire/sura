import React,{useState, useEffect} from 'react'
import classes from './Input.module.css'

const Input = ({shortenLink, loading})=> {
       const [enteredUrl, setEnteredUrl] = useState('')
       const [urlIsValid, setUrlIsValid] = useState(true)
       const [urlIsTouched, setUrlIsTouched] = useState(false)
       const [formIsValid, setFormIsValid] = useState(false)
       
useEffect(()=>{
if(urlIsValid){
  setFormIsValid(true)
}
}, [urlIsValid])
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

       const submitHandler = (e)=> {
         e.preventDefault()
         if(formIsValid){
           shortenLink(enteredUrl)

           setTimeout(()=> {
             setEnteredUrl('')
           },1000)
         }

       }

      const urlIsInvalid = urlIsTouched && !urlIsValid
      const urlClass = urlIsInvalid ? classes.error :'' 
      return (
        <div className={classes["form--background"]}>
          <form onSubmit={submitHandler}>
            <div>
              <input className={urlClass} type="url" placeholder="Shorten a link here..." onChange={urlHandler} onBlur={blurHandler} value={enteredUrl} disabled={loading}/>
            </div>
            <button className={classes.button} disabled={loading} >Shorten it!</button>
          </form>
          {urlIsInvalid && <p className={classes.error}>Please add a link</p>}
        </div>
      );
}

export default Input
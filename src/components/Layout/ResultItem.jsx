import React, { useState } from 'react'
import classes from './ResultItem.module.css'

const ResultItem = ({originalLink, shortLink})=> {
  const [copied, setCopied] = useState(false)

const shortenLink = `https://${shortLink}`
  const copyToClipBoard = ()=> {
    navigator.clipboard.writeText(shortenLink)
    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    },2000)
  }
  const buttonClass = copied ? classes.copied : ''
      return (
        <div className={classes.container}>
          <p>{originalLink}</p>
          <div className={classes.result}>
            <span className={classes.link}>{shortenLink}</span>
            <button className={buttonClass} onClick={copyToClipBoard}>{copied ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      );

}

export default ResultItem
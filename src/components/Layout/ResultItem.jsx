import React, { useState } from 'react'
import classes from './ResultItem.module.css'

const ResultItem = ({originalLink, shortLink})=> {
  const [copied, setCopied] = useState(false)


  const copyToClipBoard = ()=> {
    navigator.clipboard.writeText(shortLink)
    setCopied(true)
  }
  const buttonClass = copied ? classes.copied : ''
      return (
        <div className={classes.container}>
          <p>{originalLink}</p>
          <div>
            <span className={classes.link}>{shortLink}</span>
            <button className={buttonClass} onClick={copyToClipBoard}>{copied ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      );

}

export default ResultItem
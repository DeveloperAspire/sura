import React from "react";
import classes from "./Result.module.css";
import ResultItem from "./ResultItem";

const Result = ({ result }) => {
  return (
    <div className={classes["result--container"]}>
      {result.map((item) => (
        <ResultItem
          originalLink={item.originalLink}
          shortLink={item.shortenLink}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Result;

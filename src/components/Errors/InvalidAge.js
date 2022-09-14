import React from "react";
import classes from "./InvalidAge.module.css";

const InvalidAge = (props) => {
  return (
    <div
      className={`${classes[""]} ${
        props.errorNo === 2 ? classes[""] : classes.error
      }`}
    >
      <p>{"Please enter a valid age (> 0)."}</p>
    </div>
  );
};

export default InvalidAge;

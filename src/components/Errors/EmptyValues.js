import React from "react";
import classes from "./EmptyValues.module.css";

const EmptyValues = (props) => {
  return (
    <div
      className={`${classes[""]} ${
        props.errorNo === 1 ? classes[""] : classes.error
      }`}
    >
      <p>Please enter a valid name and age (non-empty values).</p>
    </div>
  );
};

export default EmptyValues;

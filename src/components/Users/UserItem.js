import React from "react";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={classes.userItemContainer}>
      <p className={classes.userItemContainerText}>
        {`${props.userName} (${
          props.age > 1 ? props.age + " years old" : props.age + " year old"
        })`}
      </p>
    </div>
  );
};

export default UserItem;

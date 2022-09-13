import React from "react";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={classes.useritemcontainer}>
      <p>
        {`${props.userName} (${
          props.age > 1 ? props.age + " years old" : props.age + " year old"
        })`}
      </p>
    </div>
  );
};

export default UserItem;

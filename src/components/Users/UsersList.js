import React from "react";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.userslistcontainer}>
      <UserItem>{props.children}</UserItem>
    </div>
  );
};

export default UsersList;

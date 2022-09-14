import React from "react";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.usersListContainer}>
      {props.users.map((user) => {
        return (
          <UserItem userName={user.userName} age={user.age} key={user.id}>
            {props.children}
          </UserItem>
        );
      })}
    </div>
  );
};

export default UsersList;

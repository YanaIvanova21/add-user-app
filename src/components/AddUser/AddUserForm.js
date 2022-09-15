import React, { useState } from "react";
import classes from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const userFormHandler = (e) => {
    e.preventDefault();
    const enteredUserData = {
      enteredUserName: e.target.userName.value,
      enteredAge: e.target.age.value,
    };

    props.onUserDataAdded(enteredUserData);

    setUserNameValue("");
    setAgeValue("");
  };

  const userNameChangeHandler = (e) => {
    setUserNameValue(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeValue(e.target.value);
  };
  return (
    <form className={classes.addUserForm} onSubmit={userFormHandler}>
      <div>
        <label htmlFor="userName" className={classes.addUserFormLabel}>
          Username
        </label>
        <input
          className={classes.addUserFormInput}
          type="text"
          name="userName"
          value={userNameValue}
          onChange={userNameChangeHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="age" className={classes.addUserFormLabel}>
          Age (Years)
        </label>
        <input
          className={classes.addUserFormInput}
          name="age"
          type="number"
          step="1"
          value={ageValue}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <div>
        <button className={classes.addUserFormSubmitButton} type="submit">
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;

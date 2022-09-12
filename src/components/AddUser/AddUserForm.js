import React from "react";
import classes from "./AddUserForm.module.css";

const AddUserForm = () => {
  const userFormHandler = (e) => {
    e.preventDefault();
    return console.log("Submited");
  };

  const userNameChangeHandler = (event) => {
    const userName = event.target.value;
    return console.log(userName);
  };

  const ageChangeHandler = (event) => {
    const age = event.target.value;
    return console.log(age);
  };

  return (
    <form onSubmit={userFormHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={userNameChangeHandler}></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          min="1"
          step="1"
          onChange={ageChangeHandler}
        ></input>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;

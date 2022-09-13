import React from "react";
import "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const userFormHandler = (e) => {
    e.preventDefault();
    const enteredUserData = {
      enteredUserName: e.target.userName.value,
      enteredAge: e.target.age.value,
    };

    props.onUserDataAdded(enteredUserData);
  };

  return (
    <form onSubmit={userFormHandler}>
      <div>
        <label>Username</label>
        <input type="text" name="userName"></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input name="age" type="number" min="1" step="1"></input>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;

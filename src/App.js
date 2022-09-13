import React, { useState } from "react";
import AddUserForm from "./components/AddUser/AddUserForm";
import Card from "./components/ui/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  // let users = [
  //   { id: 1, userName: "Anton", age: "26" },
  //   { id: 2, userName: "Adelya", age: "58" },
  //   { id: 3, userName: "Misha", age: "59" },
  // ];
  const [users, setUsers] = useState([]);

  const onUserDataAddedHandler = (enteredUserData) => {
    setUsers((prevState) => {
      console.log(users);
      const newUser = {
        userName: enteredUserData.enteredUserName,
        age: enteredUserData.enteredAge,
      };
      return [...prevState, newUser];
    });
  };
  return (
    <div>
      <Card>
        <AddUserForm onUserDataAdded={onUserDataAddedHandler}></AddUserForm>
      </Card>
      <Card>
        {console.log(users)}
        <UsersList users={users}></UsersList>
      </Card>
    </div>
  );
}

export default App;

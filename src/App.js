import React, { useState } from "react";
import AddUserForm from "./components/AddUser/AddUserForm";
import EmptyValues from "./components/Errors/EmptyValues";
import InvalidAge from "./components/Errors/InvalidAge";
import Card from "./components/ui/Card";
import Modal from "./components/ui/Modal";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [isValid, setValid] = useState(true);
  const [errorNo, setErrorNo] = useState(0);

  const onUserDataAddedHandler = (enteredUserData) => {
    const { enteredUserName, enteredAge } = enteredUserData;

    if (enteredUserName === "" || enteredAge === "") {
      setValid(false);
      setErrorNo(1);
      return;
    }

    if (enteredAge <= 0) {
      setValid(false);
      setErrorNo(2);
      return;
    }

    setUsers((prevState) => {
      const newUser = {
        id: Math.random().toString(),
        userName: enteredUserData.enteredUserName,
        age: enteredUserData.enteredAge,
      };

      return [...prevState, newUser];
    });
  };

  const onModalCloseHandler = () => {
    setValid(true);
    setErrorNo(0);
    return;
  };

  return (
    <div>
      <Card>
        <AddUserForm onUserDataAdded={onUserDataAddedHandler}></AddUserForm>
      </Card>
      <Modal error={isValid} onModalClose={onModalCloseHandler}>
        <EmptyValues errorNo={errorNo}></EmptyValues>
        <InvalidAge errorNo={errorNo}></InvalidAge>
      </Modal>
      <Card>
        <UsersList users={users}></UsersList>
      </Card>
    </div>
  );
}

export default App;

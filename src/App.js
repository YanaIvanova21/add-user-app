import React from "react";
import AddUserForm from "./components/AddUser/AddUserForm";
import Card from "./components/ui/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <Card>
        <AddUserForm></AddUserForm>
      </Card>
      <Card>
        <UsersList></UsersList>
      </Card>
    </div>
  );
}

export default App;

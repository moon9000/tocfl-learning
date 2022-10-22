import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonBase } from "../../components/Button";

import axios from "axios";

export function UserListsPage() {
  const [list, setList] = useState([]);

  function handleClick() {
    console.log("test");
  }
  return (
    <Router>
      <div>
        <h1>Handle your lists here</h1>
        <ButtonBase onClick={handleClick}>Add a new list</ButtonBase>
      </div>
    </Router>
  );
}

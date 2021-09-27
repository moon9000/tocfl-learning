import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function onFormSubmit(e) {
    e.preventDefault();

    //allows server.js to get req.files.file.
    //if formData.append('epub'), it would allow server.js to get req.files.epub
  }

  function handleUsernameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  console.log(username);
  console.log(password);

  return (
    <Router>
      <div>
        <h1>Login </h1>
        <form onSubmit={onFormSubmit}>
          <div className="border border-black flex items-center text-center flex-col space-y-4">
            <input
              type="text"
              className="border"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => handleUsernameChange(e)}
            />
            <input
              type="password"
              className="border"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block mt-4"
            />
          </div>
        </form>
      </div>
    </Router>
  );
}

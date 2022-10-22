import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

export function RegisterPage() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  async function onFormSubmit(e) {
    e.preventDefault();
    const user = { username: username, email: email, password: password };
    console.log(user);

    try {
      const response = await axios
        .post("/register", user)
        .then(function (response) {
          console.log("la reponse est :");
          console.log(response);
          setMessage(response.data.message);
          setUsername("");
          setEmail("");
          setPassword("");
        })
        .catch(function (error) {
          console.log("on entre dans le catch de la requête");
          setMessage(error.response.data.message);
        });
    } catch (error) {
      console.log("on entre dans le catch general");
      console.log(error.response);
    }

    //allows server.js to get req.files.file.
    //if formData.append('epub'), it would allow server.js to get req.files.epub
  }

  console.log(message);

  function handleUsernameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <Router>
      <div>
        <h1>Register</h1>
        <form method="POST" onSubmit={onFormSubmit}>
          <div className="border border-black flex items-center text-center flex-col space-y-4">
            <input
              type="text"
              className="border"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => handleUsernameChange(e)}
            />
            <input
              type="email"
              className="border"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <input
              type="password"
              className="border"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block mt-4"
            />
          </div>
        </form>
      </div>
      {message ? <h2>{message} </h2> : null}
    </Router>
  );
}

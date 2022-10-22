import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const history = useHistory();

  async function onFormSubmit(e) {
    e.preventDefault();
    const user = { username: username, password: password };
    console.log(user);

    try {
      const response = await axios
        .post("/login", user)
        .then(function (response) {
          console.log("la reponse est :");
          console.log(response);

          localStorage.setItem("user", JSON.stringify(response.data));
          setMessage("You successfull logged in. Redirecting you..");
          setTimeout(() => {
            history.push("/");
            window.location.reload();
          }, 2000);
          setUsername("");
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
      {message ? <h2>{message} </h2> : null}
    </Router>
  );
}

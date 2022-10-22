import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import getCurrentUser from "../../hooks/getCurrentUser";
import logout from "../../hooks/logout";

export function ProfilePage() {
  const currentUser = getCurrentUser();

  console.log(currentUser);

  return (
    <Router>
      {currentUser ? (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
            ...{" "}
            {currentUser.accessToken.substr(
              currentUser.accessToken.length - 20
            )}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </div>
      ) : (
        <div>Please login to access your profile</div>
      )}
    </Router>
  );
}

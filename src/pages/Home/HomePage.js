import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function HomePage() {
  return (
    <Router>
      <div className="Home">
        <h1>Welcome to TOCFL Learning</h1>
        <h2>
          You will find here multiple tools to help you learning traditional
          chinese and study for the TOCFL exam
        </h2>
      </div>
    </Router>
  );
}

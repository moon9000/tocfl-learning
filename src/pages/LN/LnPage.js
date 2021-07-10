import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function LnPage() {
  return (
    <Router>
      <div className="Home">
            <h1>Traditional Chinese Light Novel Parser</h1>
            <h2>You can add a Light Novel in EPUB format and obtain a parsed json file</h2>
            <p>Each sentences of the light novel that contains a word that you need to learn for the TOCFL Exam will be kept</p>
      </div>
    </Router>
  );
}

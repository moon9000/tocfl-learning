import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function HomePage() {
  return (
    <Router>
        <div className="flex flex-column text-center bg-lightDark">
          <h3 className="text-white">
            Welcome to TOCFL Learning
          </h3>
          <h4 className="text-white">
            You will find here multiple tools to help you learning traditional
            chinese and study for the TOCFL exam
          </h4>
        </div>
    </Router>
  );
}

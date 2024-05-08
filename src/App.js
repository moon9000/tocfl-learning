import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;

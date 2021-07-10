import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Main />
    </div>
  </Router>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import "./style.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
    </Router>
  );
}

export default App;

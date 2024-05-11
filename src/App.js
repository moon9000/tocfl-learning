import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Main">
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

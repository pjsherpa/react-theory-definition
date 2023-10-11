import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Qa from "./component/Qa";
import Counter from "./component/Counter";
import CallApi from "./component/CallApi";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Qa />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="/CallApi" element={<CallApi />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

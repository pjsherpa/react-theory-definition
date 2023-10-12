import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Qa from "./component/Qa";
import Counter from "./component/Counter";
import CallApi from "./component/CallApi";

function App() {
  const components = [Counter, CallApi];
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Qa />} />
            {components.map((Page, index) => (
              <Route
                key={index}
                path={`/${Page.name.toLowerCase()}`}
                element={<Page />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

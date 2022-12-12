// import logo from "./logo.svg";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <Nav />
              <Checkout />
            </>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// import logo from "./logo.svg";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Home />
      </div>
    <Router>
    
  );
}

export default App;

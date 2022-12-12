import React from "react";
import "./styles/Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
// import img from "./logo.png"
const logo = require("./logo.png");
function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt=""></img>
      </Link>
      {/* <h1 className="title">Amazon</h1> */}
      <input className="inputField" type={Text}></input>
      <SearchIcon className="searchLogo" />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="option">
          <span className="main">Hello,Guest</span>
          <span className="sub">SignIn</span>
        </div>
      </Link>
      <div className="option">
        <span className="main">Orders</span>
        <span className="sub">Pricing</span>
      </div>
      <div className="option">
        <span className="main">Support</span>
        <span className="sub">Help</span>
      </div>
      <Link to="./checkout" style={{ textDecoration: "none" }}>
        <div className="basketOption">
          <ShoppingCartIcon />
          <span className="sub basketCount">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;

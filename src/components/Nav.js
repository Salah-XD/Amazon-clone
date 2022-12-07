import React from "react";
import "./styles/Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import img from "./logo.png"
const logo = require("./logo.png");
function Nav() {
  return (
    <div className="nav">
      <img className="logo" src={logo}></img>
      {/* <h1 className="title">Amazon</h1> */}
      <input className="inputField" type={Text}></input>
      <SearchIcon className="searchLogo" />

      <div className="option">
        <span className="main">Hello,Salah</span>
        <span className="sub">SignOut</span>
      </div>
      <div className="option">
        <span className="main">Orders</span>
        <span className="sub">Pricing</span>
      </div>
      <div className="option">
        <span className="main">Support</span>
        <span className="sub">Help</span>
      </div>
      <div className="basketOption">
        <ShoppingCartIcon />
        <span className="sub basketCount">0</span>
      </div>
    </div>
  );
}

export default Nav;

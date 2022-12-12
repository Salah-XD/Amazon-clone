import React from "react";
import "./components/styles/login.css";
import logo from "./components/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form>
          <h5>E-Mail</h5>
          <input type="email" required />
          <h5>Password</h5>
          <input type="password" required />
          <button type="submit" className="loginBtn">
            Sign In
          </button>
        </form>
        <p>
          <small>
            By Signing In You agree to the Amazons fake clone's Condition of use
            & sale. Please see our Privacy Notice, Our Cookies Notice And Our
            Intrest-Based Ads Notice
          </small>
        </p>
        <button className="signupBtn">Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;

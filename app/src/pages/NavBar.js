import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div className="App">
      <div className="Header">
        <img className="HeaderLogo" src={logo} alt="logo" />

        <ul className="NavLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/stoper">Stoper</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

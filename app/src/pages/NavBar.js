import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = styled.div`
  background-color: #77a8a8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 10%;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavBar = () => {
  return (
    <div className="App">
      <Header>
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
      </Header>
    </div>
  );
};

export default NavBar;

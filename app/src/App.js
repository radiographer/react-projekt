import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stoper from "./pages/Stoper";
import Counter from "./pages/Counter";
import Characters from "./pages/Characters";
import Register from "./pages/Register";
import Login from "./pages/Login";
import logo from "./pages/images/logo.png";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <img className="HeaderLogo" src={logo} alt="logo" />

          <div className="Nav">
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
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/stoper">
              <Stoper />
            </Route>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

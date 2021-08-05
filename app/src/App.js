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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">strona główna</Link>
            </li>
            <li>
              <Link to="/about">o mnie</Link>
            </li>
            <li>
              <Link to="/stoper">stoper</Link>
            </li>
            <li>
              <Link to="/counter">licznik</Link>
            </li>
            <li>
              <Link to="/characters">lista postaci</Link>
            </li>
            <li>
              <Link to="/register">rejestracja</Link>
            </li>
            <li>
              <Link to="/login">logowanie</Link>
            </li>
          </ul>
          <div>
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
        </header>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Stoper from "./pages/Stoper";
import Counter from "./pages/Counter";
import Characters from "./pages/Characters";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CharacterCard from "./pages/CharacterCard";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <NavBar />

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
            <Route exact path="/temp">
              <CharacterCard />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
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
import LearnMore from "./pages/LearnMore";
import SuccesLogin from "./pages/components/SuccesLogin";

function App() {
  const [allCharacters, setAllCharacters] = useState(null);

  return (
    <div>
      <div>
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
              <Characters setAllCharacters={setAllCharacters} />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            {allCharacters?.map((item) => {
              return (
                <Route path={`/${item.name}/${item.id}`}>
                  <LearnMore
                    name={item.name}
                    img={item.image}
                    species={item.species}
                    status={item.status}
                    id={item.id}
                    type={item.type}
                    gender={item.gender}
                  />
                </Route>
              );
            })}

            <Route exact path="/succes-login">
              <SuccesLogin />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>
              {" "}
              <Link to="/about">About me</Link>
            </h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>
              <Link to="/stoper">Stoper</Link>
            </h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>
              <Link to="/counter">Counter</Link>
            </h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>
              {" "}
              <Link to="/characters">Characters</Link>
            </h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column5 */}
          <div className="col">
            <h4>
              {" "}
              <Link to="/register">Register</Link>
            </h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column6 */}
          <div className="col">
            <h4>
              {" "}
              <Link to="/login">Login</Link>
            </h4>
            <h1 className="list-unstyled">
              <li>Description</li>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

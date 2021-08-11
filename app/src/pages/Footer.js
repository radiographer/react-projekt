import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column21 */}
          <div className="col">
            <h4>About me</h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stoper</h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Counter</h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>Characters</h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column5 */}
          <div className="col">
            <h4>Register</h4>
            <ui className="list-unstyled">
              <li>Description</li>
            </ui>
          </div>
          {/* Column6 */}
          <div className="col">
            <h4>Login</h4>
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

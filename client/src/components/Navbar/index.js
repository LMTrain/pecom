import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <section className="nav-section-top1">
        <ul className="navbar-nav">
          <Link className="navbar-brand" to="/">
            <span></span><img alt="PeCom" width="60" height="80" className="img-fluid" src='https://lmtrain.github.io/lm-images/assets/images/ferrari_1.jpg' />
          </Link>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>PeCom</h5>
            </Link>
          </li>
          <span className="nav-icon-space"></span>
          <li className="nav-item">
            <Link
              to="/Signin"
              className={window.location.pathname === "/Signin" ? "nav-link active" : "nav-link"}
            >
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/GetStarted"
              className={window.location.pathname === "/GetStarted" ? "nav-link active" : "nav-link"}
            >
              <div className="get-started-box">              
                <button className="get-started">Get Started</button>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;

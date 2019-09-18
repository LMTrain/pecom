import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function HomeNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Pecom
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              PeCom
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Signin"
              className={window.location.pathname === "/Favorite" ? "nav-link active" : "nav-link"}
            >
              Sign in
            </Link>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;

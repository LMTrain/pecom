import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function userNavbar() {
  return (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="/" className="navbar-brand">HSS</a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav">
            <a href="/" className="nav-item nav-link active">Home</a>
            <a href="/dashboard" className="nav-item nav-link">Device Dashboard</a>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Users</a>
                <div className="dropdown-menu">
                  <a href="/register" className="dropdown-item">Register</a>
                  <a href="/login" className="dropdown-item">Login</a>
                  <a href="/welcome" className="dropdown-item">Help</a>
                </div>
            </div>
        </div>
        <form className="form-inline">
            <div className="input-group"></div>                   
                <input type="text" className="form-control" placeholder="Search for Devices">                
                <div className="input-group-append">
                 

                  <a href="https://www.google.com/" className="btn btn-secondary btn-block" target="_blank">Search</a>
              
                  
                </div>
            ></input>
        </form>
        <div className="navbar-nav">
          <a href="/admin" className="nav-item nav-link">Admin Login</a>
        </div>
    </div>
  </nav>
  );
}

export default userNavbar;

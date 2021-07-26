import React from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link navbar-item" to="/">
              SEARCH NEARBY
            </NavLink>
            <NavLink className="nav-link navbar-item" to="/search">
              SEARCH FOR STALLS
            </NavLink>
            <NavLink className="nav-link navbar-item" to="/contribute">
              CONTRIBUTE
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

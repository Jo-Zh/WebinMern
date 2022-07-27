import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Nav from "./Nav";
import classes from "./Base.module.css";

const Base = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-right"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/category">
                Category
              </Link>
              <Link className="nav-link" to="/sign-up">
                Sign-Up
              </Link>
              <Link className="nav-link disabled" to="/">
                Disabled
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Nav />

      <Outlet></Outlet>
    </div>
  );
};

export default Base;

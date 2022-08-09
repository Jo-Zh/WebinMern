import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Nav from "./Nav";
import classes from "./Base.module.css";

const Base = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg ">
        <div className="container-fluid ">
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
            className="nav justify-content-center collapse navbar-collapse text-left"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-item input-group w-50 mx-5">
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-item ">
              <Link className="nav-link" to="/sign-up">
                Sign up | Log in
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

import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import classes from "./Base.module.css";
import background from "./imges/animal-background.jpg";

const Home = () => {
  const mystyle = {
    width: "300px",
    height: "300px",
  };
  return (
    <>
      <div
        className={`${classes.backlay} row`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="card m-5" style={mystyle}>
          <div className="card-body align-bottom border">
            <h5 className="card-title">Ready to declutter your closet?</h5>

            <NavLink to="#" className="card-link">
              Sell now
            </NavLink>
            <NavLink to="#" className="card-link">
              Learn how it works
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

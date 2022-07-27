import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import classes from "./Base.module.css";
import background from "./imges/animal-background.jpg";

const Home = () => {
  return (
    <div
      className={`${classes.backlay} row vh-100`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="m-auto text-center text-secondary">This is Home</div>
    </div>
  );
};

export default Home;

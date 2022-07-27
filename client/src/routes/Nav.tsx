import React from "react";
import classes from "./Nav.module.css";
import { NavbarLink } from "../UI/Style";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <NavbarLink to="/">Women</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">Men</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">Kids</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">Entertainment</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">Pet care</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/">About</NavbarLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

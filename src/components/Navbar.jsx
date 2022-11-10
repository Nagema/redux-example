import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink className="navbar-link" to="" activeclassname={"active"}>
        Home
      </NavLink>
      <NavLink
        className="navbar-link"
        to="characters"
        activeclassname={"active"}
      >
        Characters
      </NavLink>
      <NavLink className="navbar-link" to="planets" activeclassname={"active"}>
        Planets
      </NavLink>
      <NavLink className="navbar-link" to="Login" activeclassname={"active"}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;

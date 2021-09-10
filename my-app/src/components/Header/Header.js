import { requirePropFactory } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import inmobiliariaLogo from "../../image/inmobiliariaLogo.png";
import "./Header.scss";

function Header({ ...props }) {
  return (
    <header className="bg-primary mb-4 Header" {...props}>
      <div className="container-fluid">
        <div className="row div-container">
          <nav className="navbar navbar-expand navbar-dark nav-container">
            <div>
              <img src={inmobiliariaLogo} />
            </div>
          </nav>
          <nav className="navbar navbar-expand navbar-dark nav-container">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand navLink-space"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link  navLink-space"
              to="/Dashboard"
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
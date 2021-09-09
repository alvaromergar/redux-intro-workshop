import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand"
              to="/"
            >
              Home
            </NavLink>

            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/new-product"
                >
                  New Product
                </NavLink>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
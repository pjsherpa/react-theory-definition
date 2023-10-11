import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Qa</Link>
        </li>
        <li>
          <Link to="/callapi">callapi</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
        <li>
          <Link to="/callapi">callapi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const querySelector = ["Counter", "CallApi", "CheckList", "LeaderBoard"];
  return (
    <nav>
      <Link style={{ margin: "10px" }} to="/">
        Qa
      </Link>
      {querySelector.map((query) => (
        <Link style={{ margin: "10px" }} to={`/${query.toLowerCase()}`}>
          {query}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

import React from "react";
import airbnb_logo from "../images/airbnb_logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--logo" src={airbnb_logo} alt="AirBnB logo"></img>
    </nav>
  );
}

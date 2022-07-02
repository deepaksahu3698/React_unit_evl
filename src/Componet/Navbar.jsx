import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/login">LOGIN</Link>
      <Link to="/">HOME</Link>
      <Link to="/booking">BOOKING</Link>
     
    </div>
  );
};

export default Navbar;

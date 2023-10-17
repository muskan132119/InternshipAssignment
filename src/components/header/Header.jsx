import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import dropDown from "../../assets/dropDown.svg";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>
        <a href="/">
          <span>Solution</span>
          <img src={dropDown} className="dropDown" alt="" />
        </a>
        <a href="/">
          <span>Features</span>
          <img src={dropDown} className="dropDown" alt="" />
        </a>
        <a href="/">Blog</a>
        <a href="/">
          <span>About</span> <img src={dropDown} className="dropDown" alt="" />
        </a>
      </div>
      <div className="navbar-right">
        <div className="btn">Login</div>
        <div className="btn">Register</div>
      </div>
    </div>
  );
};

export default Header;

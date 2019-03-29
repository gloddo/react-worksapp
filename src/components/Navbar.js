import React, { Component } from "react";
// import PropTypes from "prop-types";
import { FaHome, FaSearch, FaPlus, FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Logo.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <Link to="/">
              <FaHome className="n-icon" />
            </Link>
            <Link to="/search">
              <FaSearch className="n-icon" />
            </Link>
            <Link to="/">
              <Logo />
            </Link>
            <Link to="/new-chat">
              <FaPlus className="n-icon" />
            </Link>
            <Link to="/menu">
              <FaBars className="n-icon" />
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

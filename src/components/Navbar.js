import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaHome, FaSearch, FaPlus, FaBars } from "react-icons/fa";
import Logo from "./Logo";
import NavSection from "./NavSection";
import "./Logo.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <NavSection fn={this.props.fn}>
              <FaHome className="n-icon" />
            </NavSection>
            <NavSection fn={this.props.fn}>
              <FaSearch className="n-icon" />
            </NavSection>
            <NavSection fn={this.props.fn}>
              <Logo />
            </NavSection>
            <NavSection fn={this.props.fn}>
              <FaPlus className="n-icon" />
            </NavSection>
            <NavSection fn={this.props.fn}>
              <FaBars className="n-icon" />
            </NavSection>
          </ul>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  fn: PropTypes.func
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaHome, FaSearch, FaPlus, FaBars } from "react-icons/fa";
import Logo from "./Logo";
import NavSection from "./NavSection";
import "./Logo.css";

export default class FavouriteNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <NavSection click={() => this.props.click("home")}>
              <FaHome className="n-icon" />
            </NavSection>
            <NavSection click={() => this.props.click("search")}>
              <FaSearch className="n-icon" />
            </NavSection>
            <NavSection click={() => {}}>
              <Logo />
            </NavSection>
            <NavSection click={() => this.props.click("newChat")}>
              <FaPlus className="n-icon" />
            </NavSection>
            <NavSection click={() => this.props.click("menu")}>
              <FaBars className="n-icon" />
            </NavSection>
          </ul>
        </nav>
      </div>
    );
  }
}

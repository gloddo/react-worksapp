import React, { Component } from "react";
import { FaHome, FaSearch, FaPlus, FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import classNames from "classnames"
import "./Logo.css";

export default class Navbar extends Component {
  render() {
    let navClass = classNames({
      navbar: true,
      shifted: this.props.menuOpen,
    })
    return (
      <div>
        <nav className={navClass}>
          <ul>
            <Link to="/">
              <FaHome className="n-icon" />
            </Link>
            <Link to="/search">
              <FaSearch className="n-icon" />
            </Link>
            <Logo status={this.props.status} click={this.props.click} />
            <Link to="/new-chat">
              <FaPlus className="n-icon" />
            </Link>
            <FaBars className="n-icon" onClick={this.props.openMenu}/>
          </ul>
        </nav>
      </div>
    );
  }
}

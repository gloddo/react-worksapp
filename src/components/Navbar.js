import React, { Component } from "react";
import classNames from "classnames";
import MainNavbar from "./MainNavbar";
import "./Logo.css";

class Navbar extends Component {
  render() {
    let navClass = classNames({
      navbar: true,
      shifted: this.props.isMenuOpen
    });
    return (
      <nav className={navClass}>
          <MainNavbar
            status={this.props.status}
            openMenu={this.props.openMenu}
            click={this.props.click}
            isMenuOpen={this.props.isMenuOpen}
          />
      </nav>
    );
  }
}

export default Navbar;

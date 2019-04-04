import React, { Component } from "react";
import classNames from "classnames";
import MainNavbar from "./MainNavbar";
import ChatNavbar from "./ChatNavbar";
import "./Logo.css";

class Navbar extends Component {
  render() {
    let navClass = classNames({
      navbar: true,
      shifted: this.props.isMenuOpen
    });
    return (
      <nav className={navClass}>
        {this.props.isChat ? (
          <ChatNavbar
            openMenu={this.props.openMenu}
            isMenuOpen={this.props.isMenuOpen}
            img={this.props.img.img}
            state={this.props.state.state}
            chat={this.props.chat}
            history={this.props.history}
          />
        ) : (
          <MainNavbar
            status={this.props.status}
            openMenu={this.props.openMenu}
            click={this.props.click}
            isMenuOpen={this.props.isMenuOpen}
          />
        )}
      </nav>
    );
  }
}

export default Navbar;

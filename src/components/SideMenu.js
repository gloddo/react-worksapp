import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./SideMenu.css";

export default class SideMenu extends Component {
  render() {
    let asideClass = classNames({
      "side-menu": true,
      open: this.props.isOpen,
      closed: !this.props.isOpen
    });
    return (
      <aside className={asideClass}>
        <div className="outer-click" onClick={this.props.closeMenu} />
        <FaAngleLeft
          color="black"
          className="n-icon"
          onClick={this.props.closeMenu}
        />
        <ProfilePic img={this.props.img} username={this.props.username} />
        <div className="links">
          <div>
            <Link to="/new-chat" onClick={this.props.closeMenu}>
              New Chat
            </Link>
            <Link to="/favourites" onClick={this.props.closeMenu}>
              Favourites
            </Link>
            <Link to="/edit-profile" onClick={this.props.closeMenu}>
              Edit Profile
            </Link>
          </div>
          <Link to="/" onClick={this.props.logout}>
            Logout
          </Link>
        </div>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  img: PropTypes.string
};

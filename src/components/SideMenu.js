import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import classNames from "classnames"

export default class SideMenu extends Component {
  render() {
      let asideClass = classNames({
        "side-menu": true,
        open: this.props.isOpen,
        closed: !this.props.isOpen,
      })
    return (
      <aside className={asideClass}>
        <FaAngleLeft color="black" className="n-icon" onClick={this.props.closeMenu} />
        <ProfilePic img={this.props.img} />
        <div>
          <Link to="/new-chat">New Chat</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/profile">Edit Profile</Link>

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

import React, { Component } from "react";
import { FaSearch, FaBars, FaAngleLeft, FaPaperclip } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Logo.css";
import ProfilePic from "./ProfilePic";

class Navbar extends Component {
  render() {
      console.log(this.props.img);
      
    return (
      <ul>
        <Link to="/">
          <FaAngleLeft className="n-icon" />
        </Link>
        <Link to="/search">
          <FaSearch className="n-icon" />
        </Link>
        <ProfilePic state={this.props.state} modal={true} img={this.props.img}  />
        <Link to="/new-chat">
          <FaPaperclip className="n-icon" />
        </Link>
        <FaBars className="n-icon" onClick={this.props.openMenu} />
      </ul>
    );
  }
}

export default Navbar;

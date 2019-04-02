import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import "./Modal.css";

export default class ProfilePopUp extends Component {
  render() {
    return (
      <div>
        <ProfilePic img={this.props.img} />
        <FaStar />
        <FaTrashAlt />
      </div>
    );
  }
}

ProfilePopUp.propTypes = {
  img: PropTypes.string
};

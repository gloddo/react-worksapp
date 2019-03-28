import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./res/logo-ct.png";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo-btn">
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}

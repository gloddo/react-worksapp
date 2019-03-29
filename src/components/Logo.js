import React, { Component } from "react";
import logoFree from "./res/logo-ct.png";
import logoBusy from "./res/logo-ct-b.png";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo-btn" onClick={this.props.click}>
        <img className="logo" src={this.props.status ? logoFree : logoBusy} alt="logo" />
      </div>
    );
  }
}

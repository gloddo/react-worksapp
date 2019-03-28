import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavSection extends Component {
  render() {
    return (
      <li
        onClick={link => {
          this.props.click(link);
        }}
      >
        {this.props.children}
      </li>
    );
  }
}

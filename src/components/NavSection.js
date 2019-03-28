import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavSection extends Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.fn("first");
        }}
      >
        {this.props.children}
      </li>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavSection extends Component {
  render() {
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
}

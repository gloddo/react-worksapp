import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavSection extends Component {
  render() {
    return (
      <li>
        <a onClick={() => this.props.fn("second")}>{this.props.children}</a>
      </li>
    );
  }
}

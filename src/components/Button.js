import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    return (
      <button type="submit" onClick={() => this.props.fn()}>
        {this.props.children}
      </button>
    );
  }
}

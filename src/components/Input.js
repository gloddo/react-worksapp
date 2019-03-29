import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  render() {
    return (
      <input
        className={this.props.type}
        id={this.props.id}
        onChange={e => this.props.change(e)}
        value={this.props.value}
        onSubmit={e => this.props.send(e)}
        placeholder={this.props.placeholder}
      />
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
};

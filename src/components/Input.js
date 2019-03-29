import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  render() {
    return (
      <input
        className={this.props.class}
        id={this.props.id}
        type={this.props.type}
        onChange={e => this.props.change(e)}
        value={this.props.value}
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

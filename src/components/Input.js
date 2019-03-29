import React, { Component } from "react";

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

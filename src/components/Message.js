import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
        <span className="message">{this.props.children}</span>
    );
  }
}

import React, { Component } from "react";
import { nullLiteral } from "babel-types";

export default class Date extends Component {
  render() {
    return (
      this.props.notify >= 1 && (
        <div className="notify-badge">
          {this.props.notify > 99 ? "99+" : this.props.notify}
        </div>
      )
    );
  }
}

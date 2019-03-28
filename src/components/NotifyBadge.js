import React, { Component } from "react";

export default class Date extends Component {
  render() {
    return (
        <div className="notify-badge">
          {this.props.notify && (this.props.notify > 99 ? "99+" : this.props.notify)}
        </div>
      
    );
  }
}

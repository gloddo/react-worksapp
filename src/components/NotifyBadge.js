import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NotifyBadge extends Component {
  render() {
    return (
      this.props.notify !== 0 && (
        <span className="notify-badge">
          {this.props.notify > 99 ? "99+" : this.props.notify}
        </span>
      )
    );
  }
}

Date.propTypes = {
  notify: PropTypes.number
};

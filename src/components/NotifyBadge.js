import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Date extends Component {
  render() {
    return (
      this.props.notify !== 0 && (
        <div className="notify-badge">
          {this.props.notify > 99 ? "99+" : this.props.notify}
        </div>
      )
    );
  }
}

Date.propTypes = {
  notify: PropTypes.number
};

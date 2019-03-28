import React, { Component } from "react";
import format from "date-fns/format";
import isThisYear from "date-fns/is_this_year";
import PropTypes from "prop-types";

export default class Time extends Component {
  render() {
    let dateFormat;
    if (this.props.type.includes("date")) { 
      if (isThisYear(this.props.date)) {
        dateFormat = "MMM Do";
      } else dateFormat = "MMM Do YYYY";
    } else if (this.props.type.includes("time")) {
      dateFormat = "HH:mm";
    }
    return (
      <time className={this.props.type}>
        {format(this.props.date, dateFormat)}
      </time>
    );
  }
}

Date.propTypes = {
  type: PropTypes.string,
  date: PropTypes.instanceOf(Date)
};

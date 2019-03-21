import React, { Component } from "react";
import dateFns from "date-fns";

export default class Date extends Component {
  render() {
    let dateFormat;
    if (this.props.type.includes("date")) {
      if (dateFns.isThisYear(this.props.date)) {
        dateFormat = "DD/MM";
      } else dateFormat = "DD/MM/YYYY";
    } else if (this.props.type.includes("time")) {
      dateFormat = "HH:mm";
    }
    return (
      <time className={this.props.type}>
        {dateFns.format(this.props.date, dateFormat)}
      </time>
    );
  }
}

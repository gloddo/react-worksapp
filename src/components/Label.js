import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Label extends Component {
  render() {
    return (
      <div className="labels">
        <div className={"label name"}>
          {this.props.name} {this.props.surname}
        </div>
        {this.props.role ? (
          <div className={"label role"}>{this.props.role}</div>
        ) : null}
        {this.props.username ? (
          <span className={"label username"}>{this.props.username}</span>
        ) : null}
      </div>
    );
  }
}

Label.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  role: PropTypes.string
};

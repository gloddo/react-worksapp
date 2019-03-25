import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Label extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.name}
          {this.props.surname}
        </p>
        {this.props.role ? <p>{this.props.role}</p> : null}
      </div>
    );
  }
}

Label.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  role: PropTypes.string
};

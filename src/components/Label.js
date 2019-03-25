import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Label extends Component {
  render() {
    return (
      <div className="labels">
        <div>
          <div className={this.props.class}>
            {this.props.name} {this.props.surname}
          </div>
        </div>
        {this.props.role ? (
          <div>
            <div className={this.props.class}>{this.props.role}</div>
          </div>
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

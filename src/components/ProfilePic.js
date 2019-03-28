import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProfilePic extends Component {
  render() {
    return (
      <picture>
        <img
          className={this.props.state + " profile-pic"}
          src={this.props.img || "img/placeholder"}
          alt="pic"
        />
        <div className={this.props.ball && this.props.state} />
      </picture>
    );
  }
}

ProfilePic.propTypes = {
  img: PropTypes.string,
  state: PropTypes.string
};

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProfilePic extends Component {
  render() {
    return (
      <picture>
        <img
          className="profile-pic"
          src={this.props.img || "img/placeholder"}
          alt="pic"
        />
        <shape className={this.props.state ? "green" : "red"} />
      </picture>
    );
  }
}

ProfilePic.propTypes = {
  img: PropTypes.string,
  state: PropTypes.bool
};

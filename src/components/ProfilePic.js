import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePopUp from "./ProfilePopUp";
import Modal from "./Modal";

export default class ProfilePic extends Component {
  state = {
    modale: this.props.modale,
    modaleOn: false
  };

  render() {
    return (
      <picture>
        {this.state.modaleOn && <Modal img={this.props.img} />}
        <img
          onClick={() => this.setState({ modaleOn: true })}
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

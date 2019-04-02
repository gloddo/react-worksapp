import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Label from "./Label";

export default class ProfilePic extends Component {
  state = {
    modalOn: false
  };

  render() {
    return (
      <picture>
        {this.state.modalOn && (
          <Modal
            onClick={() => this.setState({ modalOn: false })}
            img={this.props.img}
          />
        )}
        <img
          onClick={
            this.props.modal
              ? () => this.setState({ modalOn: true })
              : undefined
          }
          className={this.props.state + " profile-pic"}
          src={this.props.img || "img/placeholder"}
          alt="pic"
        />
        <div className={this.props.ball && this.props.state} />
        <Label username={this.props.username} />
      </picture>
    );
  }
}

ProfilePic.propTypes = {
  img: PropTypes.string,
  state: PropTypes.string,
  modal: PropTypes.bool,
  ball: PropTypes.bool
};

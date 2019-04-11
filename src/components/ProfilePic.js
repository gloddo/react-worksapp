import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Label from "./Label";
import classNames from "classnames";
import placeholder from "./res/photo.png"

export default class ProfilePic extends Component {
  state = {
    modalOn: false
  };

  render() {
    let imgClass = classNames({
      "profile-pic": true,
      busy: !this.props.state,
      free: this.props.state
    });
    let ballClass = classNames({
      busy: !this.props.state,
      free: this.props.state
    })
    return (
      <picture>
        {this.state.modalOn && (
          <Modal
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              this.setState({ modalOn: false });
            }}
            img={this.props.img || placeholder}
            userId={this.props.userId}
            chatId={this.props.chatId}
            users={this.props.users}
          />
        )}
        <img
          onClick={
            this.props.modal
              ? e => {
                  e.stopPropagation();
                  e.preventDefault();
                  this.setState({ modalOn: true });
                }
              : undefined
          }
          className={imgClass}
          src={this.props.img || placeholder}
          alt="pic"
        />
        <div className={this.props.ball && ballClass} />
        <Label username={this.props.username} />
      </picture>
    );
  }
}

ProfilePic.propTypes = {
  img: PropTypes.string,
  state: PropTypes.bool,
  modal: PropTypes.bool,
  ball: PropTypes.bool
};

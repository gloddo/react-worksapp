import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegTrashAlt } from "react-icons/fa";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="modal">
        <div className="internalModal">
          <div className="modalImg">
            <img src={this.props.img} alt="profile-pic" />
          </div>
          <div className="modalDiv">
            <FaStar className="modal-icon" />
            <FaRegTrashAlt className="modal-icon" />
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string
};

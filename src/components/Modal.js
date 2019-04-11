import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegTrashAlt, FaRegStar } from "react-icons/fa";
import "./Modal.css";
import { addFav } from "./utils";

export default class Modal extends Component {
  addFav = e => {
    e.stopPropagation();
    e.preventDefault();
    addFav(this.props.chatId, this.props.userId, this.props.users[this.props.userId].favourites)
  }
  
  favouriteIcon(){
    if(~this.props.users[this.props.userId].favourites.indexOf(this.props.chatId)){
      return <FaStar className="modal-icon" onClick={this.addFav}/>
    }
    return <FaRegStar className="modal-icon" onClick={this.addFav}/>
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="modal">
        <div className="internalModal">
          <div className="modalImg">
            <img src={this.props.img} alt="profile-pic" />
          </div>
          <div className="modalDiv">
            {this.favouriteIcon()}
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

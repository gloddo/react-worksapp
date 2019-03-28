import React, { Component } from "react";
// import PropTypes from "prop-types";
import {FaAngleUp, FaStar} from "react-icons/fa"
import FavouriteList from "./FavouriteList";

export default class FavouritesBar extends Component {
  render() {
    return (
      <div className="favourites-bar">
        <FaStar className="f-icon" color="#f6f7eb" size="3em"/>
        <ul>
          <FavouriteList favourites={this.props.favourites} />
        </ul>
        <FaAngleUp className="f-icon" color="#f6f7eb" size="3em"/>
      </div>
    );
  }
}

import React, { Component } from "react";
// import PropTypes from "prop-types";
import { FaAngleUp, FaStar } from "react-icons/fa";
import FavouriteBarList from "./FavouriteBarList";

export default class FavouritesBar extends Component {
  render() {
    return (
      <div className="favourites-bar">
        <FaStar className="f-icon" color="#f6f7eb" size="3em" />
        <ul>
          <FavouriteBarList favourites={this.props.favourites} />
        </ul>
        <FaAngleUp className="f-icon" color="#f6f7eb" size="3em" />
      </div>
    );
  }
}

FavouritesBar.propTypes = {
  favourites: PropTypes.array
};

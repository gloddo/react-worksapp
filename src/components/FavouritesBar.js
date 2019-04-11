import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaAngleUp, FaStar } from "react-icons/fa";
import FavouriteBarList from "./FavouriteBarList";
import { Link } from "react-router-dom";

export default class FavouritesBar extends Component {
  render() {
    return (
      <div className="favourites-bar">
        <FaStar className="f-icon" color="#f6f7eb" size="3em" />
        <ul>
          <FavouriteBarList favourites={this.props.favourites} users={this.props.users} userId={this.props.userId}/>
        </ul>
        <Link to="/favourites">
          <FaAngleUp className="f-icon" color="#f6f7eb" size="3em" />
        </Link>
      </div> 
    );
  }
}

FavouritesBar.propTypes = {
  favourites: PropTypes.array
};

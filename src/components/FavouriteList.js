import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import PropTypes from "prop-types";

export default class FavouriteList extends Component {
  render() {
    return this.props.favourites.map((el, i) => {
      return (
        <li key={i}>
          <ProfilePic key={i} img={el.img} state={el.state} />
        </li>
      );
    });
  }
}

FavouriteList.propTypes = {
  favourites: PropTypes.array
};

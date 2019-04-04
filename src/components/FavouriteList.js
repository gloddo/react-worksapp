import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import PropTypes from "prop-types";

export default class FavouriteList extends Component {
  render() {
    return this.props.favourites.map(([id, obj]) => {
      return (
        <li key={id}>
          <ProfilePic key={id} img={obj.img} state={obj.state} />
        </li>
      );
    });
  }
}

FavouriteList.propTypes = {
  favourites: PropTypes.array
};

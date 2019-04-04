import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";

export default class FavouriteBarList extends Component {
  render() {
    return this.props.favourites.map(([id, obj]) => {
      return (
        obj.favs && (
          <Link
            key={id}
            className="plain-text"
            to={`/chat/${id}`}
          >
            <li key={id}>
              <ProfilePic
                key={id}
                img={obj.img}
                click={this.props.click}
                state={obj.state}
              />
            </li>
          </Link>
        )
      );
    });
  }
}

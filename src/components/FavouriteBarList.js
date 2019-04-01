import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";

export default class FavouriteBarList extends Component {
  render() {
    return this.props.favourites.map((el, i) => {
      return (
        el.favs && (
          <Link
            key={i}
            className="plain-text"
            to={`/chat/${this.props.id}`}
          >
            <li key={i}>
              <ProfilePic
                key={i}
                img={el.img}
                click={this.props.click}
                state={el.state}
              />
            </li>
          </Link>
        )
      );
    });
  }
}

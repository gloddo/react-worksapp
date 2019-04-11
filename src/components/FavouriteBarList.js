import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";

export default class FavouriteBarList extends Component {
  render() {
    return this.props.favourites.map(fav => {
      if (~this.props.users[this.props.userId].favourites.indexOf(fav.id)) {
        let user = this.props.users[fav.partecipants];
        return (
          <Link key={fav.id} className="plain-text" to={`/chat/${fav.id}`}>
            <li key={fav.id}>
              <ProfilePic
                key={fav.id}
                img={user.img}
                click={this.props.click}
                state={user.state}
              />
            </li>
          </Link>
        );
      }
      return null;
    });
  }
}

import React, { Component } from "react";
// import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";

export default class FavouritesEntry extends Component {
  render() {
    return (
      <article className={`favourite-entry ${this.props.notify && "unread" }`}>
        <div className="foto-notification">
          <ProfilePic img={this.props.img} state={this.props.state} />
          <div className="favs-notify">
            <NotifyBadge notify={this.props.notify} />
          </div>
        </div>
        <Label
          name={this.props.name}
          surname={this.props.surname}
          role={this.props.role}
          class="name"
        />
      </article>
    );
  }
}

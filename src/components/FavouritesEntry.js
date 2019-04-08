import React, { Component } from "react";
// import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import { Link } from "react-router-dom";

export default class FavouritesEntry extends Component {
  render() {
    return (
      <Link
        key={this.props.id}
        className="plain-text favs-notify"
        to={`/chat/${this.props.id}`}
      >
        <article className={`favourite-entry ${this.props.notify && "unread"}`}>
          <div className="foto-notification">
            <ProfilePic
              img={this.props.img}
              state={this.props.state}
              ball={true}
              modal={true}
            />
            <NotifyBadge notify={this.props.notify} />
          </div>
          <Label
            name={this.props.name}
            surname={this.props.surname}
            role={this.props.role}
          />
        </article>
      </Link>
    );
  }
}

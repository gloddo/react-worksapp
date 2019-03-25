import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import Time from "./Time"

export default class ChatListEntry extends Component {
  render() {
    return (
      <article className="chatlist-entry">
        <ProfilePic img={this.props.img} state={this.props.state} />
        <Label
          name={this.props.name}
          surname={this.props.surname}
          role={this.props.role}
          class="label-name"
        />
        <div className="badges">
          <Time type="time" date={this.props.date} />
          <NotifyBadge notify={this.props.notify} />
        </div>
      </article>
    );
  }
}

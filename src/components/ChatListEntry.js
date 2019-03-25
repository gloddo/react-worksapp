import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
// import NotifyBadge from "./NotifyBadge";
// import Date from "./Date"

export default class ChatListEntry extends Component {
  render() {
    return (
      <article>
        <ProfilePic img={this.props.img} state={this.props.state} />
        <Label
          name={this.props.name}
          surname={this.props.surname}
          role={this.props.role}
        />
        <div>
          <Date type="" date={this.props.date} />
          <NotifyBadge notify={this.props.notify} />
        </div>
      </article>
    );
  }
}

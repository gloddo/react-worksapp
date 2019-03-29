import React, { Component } from "react";
// import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import Time from "./Time";

export default class ChatListEntry extends Component {
  render() {
    return (
      <article
        onClick={this.props.click}
        className={
          (this.props.selected ? "chatlist-entry selected " : "chatlist-entry ") + (this.props.notify && "unread")
        }
      >
        <ProfilePic
          img={this.props.img}
          modal={false}
          state={this.props.state}
          ball={true}
        />
        <Label
          name={this.props.name}
          surname={this.props.surname}
          role={this.props.role}
          class="name"
        />
        <div className="badges">
          <Time type="time" date={this.props.date} />
          <div className="notify-wrap">
            <NotifyBadge notify={this.props.notify} />
          </div>
        </div>
      </article>
    );
  }
}

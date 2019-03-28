import React, { Component } from "react";
// import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import Time from "./Time";

export default class ChatListEntry extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: this.props.selected
  //   };
  // }
  render() {
    return (
      <article
        onClick={this.props.click}
        className={
          this.props.selected ? "chatlist-entry selected" : "chatlist-entry"
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
          <NotifyBadge notify={this.props.notify} />
        </div>
      </article>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import Time from "./Time";
import { Link } from "react-router-dom";


export default class ChatListEntry extends Component {
  render() {
    return (
      <article
        
        className={
          (this.props.selected ? "chatlist-entry selected" : "chatlist-entry") +
          (this.props.notify ? " unread" : "")
        }
      >
        <ProfilePic
          img={this.props.img}
          modal={true}
          state={this.props.state}
          ball={true}
        />
        <Link onClick={this.props.click} className="plain-text chatlist-entry" to={`/chat/${this.props.id}`}>
          <Label
            name={this.props.name}
            surname={this.props.surname}
            role={this.props.role}
            class="name"
          />
          {this.props.date && (
            <div className="badges">
              <Time type="time" date={this.props.date} />
              <NotifyBadge notify={this.props.notify} />
            </div>
          )}
        </Link>
      </article>
    );
  }
}
ChatListEntry.propTypes = {
  click: PropTypes.func,
  img: PropTypes.string,
  selected: PropTypes.bool
};

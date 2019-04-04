import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePic from "./ProfilePic";
import Label from "./Label";
import NotifyBadge from "./NotifyBadge";
import Time from "./Time";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default class ChatListEntry extends Component {
  render() {
    let selectedClass = classNames({
      "chatlist-entry": true,
      selected: this.props.selected,
      unread: this.props.notify
    });
    return (
      <Link className="plain-text chatlist-entry" to={`/chat/${this.props.id}`}>
        <article className={selectedClass}>
          <ProfilePic
            img={this.props.img}
            modal={true}
            state={this.props.state}
            ball={true}
          />
          <Label
            name={this.props.name}
            surname={this.props.surname}
            role={this.props.role}
          />
          {this.props.date && (
            <div className="badges">
              <Time type="time" date={this.props.date} />
              <NotifyBadge notify={this.props.notify} />
            </div>
          )}
        </article>
      </Link>
    );
  }
}
ChatListEntry.propTypes = {
  click: PropTypes.func,
  img: PropTypes.string,
  selected: PropTypes.bool
};

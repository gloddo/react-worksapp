import React, { Component } from "react";
import Time from "./Time";
import isToday from "date-fns/is_today";
import PropTypes from "prop-types";

export default class Message extends Component {
  mediaRender(url, type, name) {
    if (type.includes("video")) {
      return (
        <video
          className="msg-media message"
          src={url}
          type={type}
          alt={name}
          controls
        />
      );
    }
    return <img className="msg-media message" src={url} alt={name} />;
  }

  render() {
    console.log(this.props);
    
    return (
      <article
        className={(this.props.sent ? "sent" : "received") + " chat-row"}
      >
        {this.props.text && <span className="message">{this.props.text}</span>}
        {this.props.mediaUrl && this.mediaRender(this.props.mediaUrl, this.props.mediaType, this.props.mediaName)}
        <span className="time-badge">
          {isToday(this.props.date) ? null : (
            <Time date={this.props.date} type="message-date" />
          )}
          <Time date={this.props.date} type="message-time" />
        </span>
      </article>
    );
  }
}

Message.propTypes = {
  sent: PropTypes.bool
};

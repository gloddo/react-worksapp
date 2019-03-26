import React, { Component } from "react";
import MessageText from "./MessageText";
import Time from "./Time";
import isToday from "date-fns/is_today";

export default class Message extends Component {
  sentReceivedPicker(seen, sent) {
    if (seen === undefined || seen) {
      if (sent) {
        return "chat-row sent";
      } else {
        return "chat-row received";
      }
    } else {
      return "chat-row received unseen";
    }
  }

  render() {
    return (
      <article
        className={this.sentReceivedPicker(this.props.seen, this.props.sent)}
      >
        <MessageText>{this.props.text}</MessageText>
        <span className="time-badge">
          {isToday(this.props.date) ? null : (
            <Time date={this.props.date} type="date" />
          )}
          <Time date={this.props.date} type="time" />
        </span>
      </article>
    );
  }
}

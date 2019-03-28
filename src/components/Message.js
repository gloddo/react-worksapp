import React, { Component } from "react";
import MessageText from "./MessageText";
import Time from "./Time";
import isToday from "date-fns/is_today";

export default class Message extends Component {
  render() {
    return (
      <article
        className={(this.props.sent ? "sent" : "received") + " chat-row"}
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

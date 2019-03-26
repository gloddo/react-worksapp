import React, { Component } from "react";
import Message from "./Message";

export default class Messages extends Component {
  render() {
    return this.props.messages.map((el, i) => {
      return (
        <Message
          key={i}
          sent={el.sent}
          text={el.text}
          date={el.date}
          seen={el.seen}
        />
      );
    });
  }
}

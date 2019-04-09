import React, { Component } from "react";
import Message from "./Message";
import PropTypes from "prop-types";

export default class Messages extends Component {
  render() {
    return this.props.messages.map((el, i) => {
      return (
        <div key={i} className={el.seen ? null : null}>
          <Message
            key={i}
            sent={el.sender===this.props.userLogin}
            text={el.text}
            date={el.date}
            mediaUrl={el.mediaUrl}
            mediaName={el.mediaName}
            mediaType={el.mediaType}
          />
        </div>
      );
    });
  }
}

Messages.propTypes = {
  messages: PropTypes.array
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatListEntry from "./ChatListEntry";
export default class NewChat extends Component {
  render() {
    return this.props.role.map((el, i) => (
      <div key={i}>
        <h2>{el}</h2>
        {this.props.chats.map((e, i) => (
          <article key={i}>
            {el === e.role && (
              <ChatListEntry
                img={e.img}
                modal={true}
                state={e.state}
                name={e.name}
                surname={e.surname}
                role={undefined}
                className="name"
              />
            )}
          </article>
        ))}
      </div>
    ));
  }
}

NewChat.propTypes = {
  role: PropTypes.array,
  chats: PropTypes.array
};

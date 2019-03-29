import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatListEntry from "./ChatListEntry";
import "./NewChat.css";

export default class NewChat extends Component {
  render() {
    return (
      <section className="new-chat">
        {this.props.role.map((el, i) => (
          <div key={i}>
            <h2 className="role-label">{el}</h2>
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
        ))}
      </section>
    );
  }
}

NewChat.propTypes = {
  role: PropTypes.array,
  chats: PropTypes.array
};

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
            {this.props.chats.map(([id, obj]) => (
              <article key={id}>
                {el === obj.role && (
                  <ChatListEntry
                    img={obj.img}
                    modal={true}
                    state={obj.state}
                    name={obj.name}
                    surname={obj.surname}
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

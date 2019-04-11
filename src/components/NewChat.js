import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatListEntry from "./ChatListEntry";
import "./NewChat.css";

export default class NewChat extends Component {
  render() {
    return (
      <section className="new-chat">
        {this.props.roles.map((el, i) => (
          <div key={i}>
            <h2 className="role-label">{el}</h2>
            {Object.entries(this.props.users).map(([id, user]) => (
              <article key={id} onClick={() => this.props.addChat(id)}>
                {el === user.role && (
                  <ChatListEntry
                    img={user.img}
                    url={"/"}
                    modal={true}
                    state={user.state}
                    name={user.name}
                    surname={user.surname}
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
  users: PropTypes.array
};

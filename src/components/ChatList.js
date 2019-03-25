import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";

export default class ChatList extends Component {
  render() {
    return this.props.chats.map((el, i) => {
      return (
        <ChatListEntry
          key={i}
          img={el.img}
          name={el.name}
          surname={el.surname}
          role={el.role}
          date={el.date}
          notify={el.notify}
        />
      );
    });
  }
}

import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";



export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [
        {
          date: new Date(2018, 3, 22),
          text: "prova 1 2 3",
          seen: true
        },
        {
          date: new Date(2019, 3, 22),
          text: "prova 1 2 3",
          seen: true,
          sent: true
        },
        {
          date: new Date(2019, 3, 26),
          text: "prova 1 2 3",
          seen: false
        }
      ]
    };
  }
  
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
          selected={el.selected}
        />
      );
    });
  }
}

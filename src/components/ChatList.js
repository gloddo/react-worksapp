import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";



export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      chats: [
        {
          name: "pippo",
          surname: "sowlo",
          role: "Woman Beater",
          date: new Date(),
          notify: 100,
          img: "https://via.placeholder.com/58",
          state: 'busy',
        },
        {
          name: "pippo",
          surname: "sowlo",
          role: "Woman Beater",
          date: new Date(),
          notify: 100,
          img: "https://via.placeholder.com/58",
          state: 'busy',
        },
        {
          name: "pippo",
          surname: "sowlo",
          role: "Woman Beater",
          date: new Date(),
          notify: 100,
          img: "https://via.placeholder.com/58",
          state: 'free',
        }
      ]
    };
  }
  
  render() {
    return this.state.chats.map((el, i) => {
      return (
        <ChatListEntry
          key={i}
          id={i}
          img={el.img}
          name={el.name}
          surname={el.surname}
          role={el.role}
          date={el.date}
          notify={el.notify}
          state={el.state}
          selected={i===this.state.selected}
          click={id => {
            this.setState({selected: id})}
          }
        />
      );
    });
  }
}

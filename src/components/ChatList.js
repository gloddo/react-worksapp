import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";
import NewChat from "./NewChat";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      role: ["miao", "ciao", "Some Job"],
      chats: [
        {
          name: "pippo",
          surname: "1",
          role: "miao",
          date: new Date(),
          notify: 100,
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          name: "pippo",
          surname: "2",
          role: "Some Job",
          date: new Date(),
          notify: 50,
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          name: "pippo",
          surname: "3",
          role: "ciao",
          date: new Date(),
          notify: 1,
          img: "https://via.placeholder.com/58",
          state: "free"
        },
        {
          name: "pippo",
          surname: "4",
          role: "Some Job",
          date: new Date(),
          notify: 0,
          img: "https://via.placeholder.com/58",
          state: "free"
        }
      ],
      favourites: [
        {
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          img: "https://via.placeholder.com/58",
          state: "free"
        }
      ]
    };
  }

  render() {
    return (
      <section className="chat-list">
        {this.state.chats.map((el, i) => {
          return (
            <ChatListEntry
              key={i}
              img={el.img}
              name={el.name}
              surname={el.surname}
              role={el.role}
              date={el.date}
              notify={el.notify}
              state={el.state}
              selected={i === this.state.selected}
              click={() => {
                this.setState({ selected: i });
              }}
            />
          );
        })}

        <NewChat chats={this.state.chats} role={this.state.role} />
        <FavouritesBar favourites={this.state.favourites} />
      </section>
    );
  }
}

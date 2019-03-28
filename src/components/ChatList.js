import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      chats: [
        {
          name: "pippo",
          surname: "sowlo",
          role: "Some Job",
          date: new Date(),
          notify: 100,
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          name: "pippo",
          surname: "sowlo",
          role: "Some Job",
          date: new Date(),
          notify: 50,
          img: "https://via.placeholder.com/58",
          state: "busy"
        },
        {
          name: "pippo",
          surname: "sowlo",
          role: "Some Job",
          date: new Date(),
          notify: 1,
          img: "https://via.placeholder.com/58",
          state: "free"
        },
        {
          name: "pippo",
          surname: "sowlo",
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
      <section>
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
        <FavouritesBar favourites={this.state.favourites}/>
      </section>
    );
  }
}

import React, { Component } from "react";
import FavouritesEntry from "./FavouritesEntry";
import "./Favourites.css";

export default class Favourites extends Component {
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
      ]
    };
  }

  render() {
    return (
      <section className="favourites">
        {this.state.chats.map((el, i) => {
          return (
            <FavouritesEntry
              key={i}
              img={el.img}
              name={el.name}
              surname={el.surname}
              notify={el.notify}
              role={el.role}
              state={el.state}
              click={() => {
                // TODO
              }}
            />
          );
        })}
      </section>
    );
  }
}

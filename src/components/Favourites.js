import React, { Component } from "react";
import FavouritesEntry from "./FavouritesEntry";
import "./Favourites.css";

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  render() {
    return (
      <section className="favourites">
        <div className="entries">
          {this.props.favourites.map(chat => {
              let user = this.props.users[chat.partecipants]
              return (
                <FavouritesEntry
                  key={chat.id}
                  id={chat.id}
                  img={user.img}
                  name={user.name}
                  surname={user.surname}
                  notify={user.notify }
                  role={user.role}
                  state={user.state}
                />
              );
            }

          )}
        </div>
      </section>
    );
  }
}

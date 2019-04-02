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
          {this.props.favourites.map(([id, obj]) => {
            if (obj.favs) {
              return (
                <FavouritesEntry
                  key={id}
                  id={id}
                  img={obj.img}
                  name={obj.name}
                  surname={obj.surname}
                  notify={obj.notify}
                  role={obj.role}
                  state={obj.state}
                />
              );
            }
            return null;
          })}
        </div>
      </section>
    );
  }
}

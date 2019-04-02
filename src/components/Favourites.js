import React, { Component } from "react";
import FavouritesEntry from "./FavouritesEntry";
import { Link } from "react-router-dom";
import "./Favourites.css";

export default class Favourites extends Component {

  render() {
    return (
      <section className="favourites">
        <div className="entries">
          {this.props.favourites.map((el, i) => {
            if (el.favs) {
              return (
                <Link key={i} className="plain-text search" to={`/chat/${i}`}>
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
                </Link>
              );
            }
            return null;
          })}
        </div>
      </section>
    );
  }
}

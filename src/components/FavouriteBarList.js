import React, { Component } from "react";
import ProfilePic from "./ProfilePic";

export default class FavouriteBarList extends Component {
  render() {
    return this.props.favourites.map((el, i) => {
      return (el.favs && <li key={i}><ProfilePic key={i} img={el.img} click={this.props.click} state={el.state} /></li>)
    });
  }
}

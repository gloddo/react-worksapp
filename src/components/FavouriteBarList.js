import React, { Component } from "react";
import ProfilePic from "./ProfilePic";

export default class FavouriteBarList extends Component {
  render() {
    return this.props.favourites.map((el, i) => {
      if(el.favs) return <li key={i}><ProfilePic key={i} img={el.img} click={this.props.click} state={el.state} /></li>
    });
  }
}

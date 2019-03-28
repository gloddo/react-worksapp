import React, { Component } from "react";
import ProfilePic from "./ProfilePic";

export default class FavouriteList extends Component {
  render() {
    return this.props.chats.map((el, i) => {
      return <li key={i}><ProfilePic key={i} img={el.img} state={el.state} /></li>
    });
  }
}

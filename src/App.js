import React, { Component } from "react";
import "./App.css";
import ChatListEntry from "./components/ChatListEntry";
import FavouriteNavbar from "./components/FavouriteNavbar"

class App extends Component {
  render() {
    return (
      <ChatListEntry name="Pippo" surname="Sowlo" role="Woman Beater" date={new Date()} notify={null}/>
      <FavouriteNavbar />
    );
  }
}

export default App;

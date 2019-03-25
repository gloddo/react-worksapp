import React, { Component } from "react";
import "./App.css";

import ChatListEntry from "./components/ChatListEntry";
import FavouriteNavbar from "./components/FavouriteNavbar"
import ChatList from "./components/ChatList";


var array = [
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75"
    
  },
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75"
    
  },
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75"
    
  }
]
class App extends Component {
  render() {
    return (
      <div>
        <ChatListEntry name="Pippo" surname="Sowlo" role="Woman Beater" date={new Date()} notify={null}/>
        <FavouriteNavbar />
      </div>

    );
  }
}

export default App;

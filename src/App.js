import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import ChatListEntry from "./components/ChatListEntry";
import FavouriteNavbar from "./components/FavouriteNavbar"
=======
import ChatList from "./components/ChatList";
>>>>>>> cc981e60a732058a86c5dda33ec62d997131b2a3


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
<<<<<<< HEAD
      <ChatListEntry name="Pippo" surname="Sowlo" role="Woman Beater" date={new Date()} notify={null}/>
      <FavouriteNavbar />
=======
      <ChatList chats={array}/>
>>>>>>> cc981e60a732058a86c5dda33ec62d997131b2a3
    );
  }
}

export default App;

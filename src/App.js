import React, { Component } from "react";
import "./App.css";
import ChatList from "./components/ChatList";
import FavouriteNavbar from "./components/FavouriteNavbar";


var array = [
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75",
    state: 'red'
    
  },
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75",
    state: 'red'
    
  },
  {
    name: "pippo",
    surname: "sowlo",
    role: "Woman Beater",
    date: new Date(),
    notify: 100,
    img: "https://via.placeholder.com/75",
    state: 'red'
    
  }
]
class App extends Component {
  render() {
    return (
      <div>
        <ChatList chats={array}/>
        <FavouriteNavbar chats={array}/>
      </div>
    );
  }
}

export default App;

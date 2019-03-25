import React, { Component } from "react";
import "./App.css";
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
      <ChatList chats={array}/>
    );
  }
}

export default App;

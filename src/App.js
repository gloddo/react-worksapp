import React, { Component } from "react";
import "./App.css";
import Messages from "./components/Messages";


var array = [
  {
    date: new Date(),
    text: "prova 1 2 3",
    seen: true
    
  },
  {
    date: new Date(),
    text: "prova 1 2 3",
    seen: true
    
  },
  {
    date: new Date(),
    text: "prova 1 2 3",
    seen: false
    
  },
]
class App extends Component {
  render() {
    return (
      <Messages messages={array}/>
    );
  }
}

export default App;

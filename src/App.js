import React, { Component } from "react";
import "./App.css";
import ChatListEntry from "./components/ChatListEntry";

class App extends Component {
  render() {
    return (
      <ChatListEntry name="Pippo" surname="Sowlo" role="Woman Beater" date={new Date()} notify={null}/>
    );
  }
}

export default App;

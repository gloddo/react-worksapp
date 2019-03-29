import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    page: "home",
    chats: [
      {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 100,
        img: "https://via.placeholder.com/58",
        state: "busy",
        favs: true
      },
      {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 50,
        img: "https://via.placeholder.com/58",
        state: "busy",
        favs: true
      },
      {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 1,
        img: "https://via.placeholder.com/58",
        state: "free",
        favs: false
      },
      {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 0,
        img: "https://via.placeholder.com/58",
        state: "free",
        favs: true
      }
    ]
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Route
          path="/"
          exact
          render={() => <ChatList chats={this.state.chats} />}
        />
        <Route path="/chat/:id" exact component={Chat} />
        <Route
          path="/favourites"
          exact
          render={() => <Favourites favourites={this.state.chats} />}
        />
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import { Route, Switch } from "react-router-dom";

import NewChat from "./components/NewChat";

class App extends Component {
  state = {
    page: "home",
    role:['ciao','miao','Some Job'],
    chats: [
      {
        name: "pippo",
        surname: "sowlo",
        role: "ciao",
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
        role: "miao",
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
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <ChatList role={this.state.role} chats={this.state.chats} />}
          />
          <Route path="/chat/:id" exact component={Chat} />
          <Route
            path="/favourites"
            exact
            render={() => <Favourites favourites={this.state.chats} />}
          />
          <Route path="/new-chat" exact render={() => <NewChat chats={this.state.chats} role={this.state.role} />}/>
        
        </Switch>
      </div>
    );
  }
}

export default App;

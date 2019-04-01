import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import { Route, Switch } from "react-router-dom";
import NewChat from "./components/NewChat";
import SideMenu from "./components/SideMenu";

class App extends Component {
  state = {
    page: "home",
    menu: false,
    statusFree: true,
    username: "Tester",
    profileImg: "https://via.placeholder.com/58",
    role: ["ciao", "miao", "Some Job"],
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
        <SideMenu
          logout={() => alert("logout")}
          isOpen={this.state.menu}
          img={this.state.profileImg}
          closeMenu={() => this.setState({ menu: !this.state.menu })}
          username={this.state.username}
        />
        <Navbar
          status={this.state.statusFree}
          openMenu={() => this.setState({ menu: !this.state.menu })}
          click={() => this.setState({ statusFree: !this.state.statusFree })}
          menuOpen={this.state.menu}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ChatList role={this.state.role} chats={this.state.chats} />
            )}
          />
          <Route path="/chat/:id" exact component={Chat} />
          <Route
            path="/favourites"
            exact
            render={() => <Favourites favourites={this.state.chats} />}
          />
          <Route
            path="/new-chat"
            exact
            render={() => (
              <NewChat chats={this.state.chats} role={this.state.role} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

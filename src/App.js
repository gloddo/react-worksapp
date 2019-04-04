import React, { Component } from "react";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import { Route, Switch, withRouter } from "react-router-dom";
import NewChat from "./components/NewChat";
import SideMenu from "./components/SideMenu";
import "./App.css";

class App extends Component {
  state = {
    page: "home",
    menu: false,
    statusFree: true,
    path: this.props.location.pathname,
    history: this.props.history,
    username: "Tester",
    profileImg: "https://via.placeholder.com/58",
    role: ["ciao", "miao", "Some Job"],
    stateSearch: [],
    chats: {
      0: {
        name: "pippo",
        surname: "sowlo",
        role: "ciao",
        date: new Date(),
        notify: 100,
        img: "https://via.placeholder.com/58",
        state: "busy",
        username: "ginopino",
        favs: true
      },
      1: {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 50,
        img: "https://via.placeholder.com/58",
        state: "busy",
        username: "tizio",
        favs: true
      },
      2: {
        name: "pippo",
        surname: "sowlo",
        role: "miao",
        date: new Date(),
        notify: 1,
        img: "https://via.placeholder.com/58",
        state: "free",
        username: "sempronio",
        favs: false
      },
      3: {
        name: "pippo",
        surname: "sowlo",
        role: "Some Job",
        date: new Date(),
        notify: 0,
        img: "https://via.placeholder.com/58",
        state: "free",
        username: "caio",
        favs: true
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      path: nextProps.location.pathname,
      history: nextProps.history
    });
  }

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
          state={this.state.chats[this.state.path.substring(6)] || {}}
          status={this.state.statusFree}
          openMenu={() => this.setState({ menu: !this.state.menu })}
          click={() => this.setState({ statusFree: !this.state.statusFree })}
          isMenuOpen={this.state.menu}
          img={
            this.state.chats[this.state.path.substring(6)] || {
              img: "https://via.placeholder.com/55"
            }
          }
          isChat={this.state.path.includes("/chat")}
          chat={this.state.chats[this.state.path.substring(6)]}
          history={this.state.history}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={match => (
              <ChatList
                role={this.state.role}
                chats={Object.entries(this.state.chats)}
                match={match}
              />
            )}
          />
          <Route
            path="/chat/:id"
            exact
            render={match => <Chat match={match} />}
          />
          <Route
            path="/favourites"
            exact
            render={() => (
              <Favourites favourites={Object.entries(this.state.chats)} />
            )}
          />
          <Route
            path="/new-chat"
            exact
            render={() => (
              <NewChat
                chats={Object.entries(this.state.chats)}
                role={this.state.role}
              />
            )}
          />
          <Route
            path="/search"
            exact
            render={() => (
              <Search
                fn={results => this.setState({ stateSearch: results })}
                state={this.state.stateSearch}
                chats={Object.entries(this.state.chats)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

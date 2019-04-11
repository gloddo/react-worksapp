import React, { Component } from "react";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import { Route, Switch, withRouter } from "react-router-dom";
import NewChat from "./components/NewChat";
import SideMenu from "./components/SideMenu";
import Login from "./components/Login";
import "./App.css";
import {
  uploadPicture,
  getRoles,
  updateState,
  onUsers,
  onChats
} from "./components/utils";
import ChatNavbar from "./components/ChatNavbar";

class App extends Component {
  state = {
    users: [],
    page: "home",
    login: false,
    menu: false,
    statusFree: true,
    userLogin: "",
    imgPlaceholder: "res/photo.png",
    profileImg: "https://via.placeholder.com/58",
    roles: [],
    stateSearch: [],
    chats: []
  };

  async onLogin(userId) {
    this.setState({ login: true, userLogin: userId });
    onChats(result => this.setState({ chats: result }), this.state.userLogin)
    getRoles(result => this.setState({ roles: result }));
    const status = this.state.users[this.state.userLogin].state;
    this.setState({ statusFree: status });
  }

  componentDidMount() {
    onUsers(result => {this.setState({ users: result })});
  }

  render() {
    if (!this.state.login) {
      return <Login setLogOn={userId => this.onLogin(userId)} />;
    }
    
    return (
      <div>
        <SideMenu
          logout={() => alert("logout")}
          isOpen={this.state.menu}
          img={this.state.profileImg}
          closeMenu={() => this.setState({ menu: !this.state.menu })}
          userLogin={this.state.userLogin}
        />

        <Switch>
          <Route
            path="/chat/:id"
            render={props => (
              <ChatNavbar
                users={this.state.users}
                chats={this.state.chats}
                match={props.match}
                history={props.history}
                userLogin={this.state.userLogin}
                openMenu={() => this.setState({ menu: !this.state.menu })}
                isMenuOpen={this.state.menu}
                upload={uploadPicture}
                uid={this.state.userLogin}
              />
            )}
          />
          <Route
            render={() => (
              <Navbar
                state={
                  this.state.chats[this.props.location.pathname.substring(6)] ||
                  {}
                }
                status={this.state.statusFree}
                openMenu={() => this.setState({ menu: !this.state.menu })}
                click={async () => {
                  await updateState(
                    this.state.userLogin,
                    !this.state.statusFree
                  );
                  this.setState({ statusFree: !this.state.statusFree });
                }}
                isMenuOpen={this.state.menu}
              />
            )}
          />
        </Switch>
          <Route
            path="/"
            exact
            render={match => (
              <ChatList
                userLogin={this.state.userLogin}
                users={this.state.users}
                chats={this.state.chats}
                match={match}
              />
            )}
          />
          <Route
            path="/chat/:id"
            exact
            render={props => (
              <Chat match={props.match} userLogin={this.state.userLogin} />
            )}
          />
          <Route
            path="/favourites"
            exact
            render={() => (
              <Favourites
                favourites={this.state.chats}
                users={this.state.users}
                userId={this.state.userLogin}
              />
            )}
          />
          <Route
            path="/new-chat"
            exact
            render={() => (
              <NewChat users={this.state.users} roles={this.state.roles} />
            )}
          />
          <Route
            path="/search"
            exact
            render={() => (
              <Search
                fn={results => this.setState({ stateSearch: results })}
                state={this.state.stateSearch}
                chats={this.state.chats}
                userLogin={this.state.userLogin}
                users={this.state.users}
              />
            )}
          />
      </div>
    );
  }
}

export default withRouter(App);

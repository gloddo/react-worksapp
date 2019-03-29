import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites"

class App extends Component {
  state = {
    page: "home"
  };
  changePage(pageActive) {
    this.setState({
      page: pageActive
    });
  }

  pageSwitch = page => {
    switch(page) {
      case "home": return <ChatList click={page => this.changePage(page)}/>
      case "chat": return <Chat />
      case "favs": return <Favourites click={page => this.changePage(page)}/>
      default: return <ChatList click={page => this.changePage(page)}/>;
    }
  }
  
  render() {
    return (
    <div>
      <Navbar click={page => this.changePage(page)} />
      { this.pageSwitch(this.state.page) }
    </div>
    )

  }
}

export default App;

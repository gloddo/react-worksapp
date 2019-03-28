import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    page: "first"
  };
  changePage(pageActive) {
    this.setState({
      page: pageActive
    });
  }
  render() {
    switch (this.state.page) {
      case "first":
        return (
          <div>
            <Navbar fn={page => this.changePage(page)} />
            <ChatList />
          </div>
        );
        break;
      case "second":
        return (
          <div>
            <Navbar />
            <Chat />
          </div>
        );
        break;
      default:
        return <Chat />;
    }
  }
}

export default App;

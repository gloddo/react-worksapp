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

  pageSwitch = page => {
    switch (page) {
      case "first":
        return <ChatList />;
      case "second":
        return <Chat />;
      default:
        return <Chat />;
    }
  };

  render() {
    return (
      <div>
        <Navbar fn={page => this.changePage(page)} />

        {this.pageSwitch(this.state.page)}
      </div>
    );
  }
}

export default App;

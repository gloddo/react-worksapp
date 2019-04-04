import React, { Component } from "react";
import Messages from "./Messages";
import "./Chat.css";
import { FaPaperPlane } from "react-icons/fa";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      messages: [
        {
          date: new Date(2018, 3, 22),
          text: "prova 1 2 3",
          seen: true
        },
        {
          date: new Date(2019, 3, 22),
          text: "prova 1 2 3",
          seen: true,
          sent: true
        },
        {
          date: new Date(2019, 3, 26),
          text: "prova 1 2 3",
          seen: false
        }
      ]
    };
  }

  send = event => {
    if (this.state.inputValue) {
      var temp = [];
      this.state.messages.forEach(el => {
        el.seen = true;
        temp.push(el);
      });
      this.setState({
        messages: temp.concat({
          text: this.state.inputValue,
          sent: true,
          date: new Date(),
          seen: true
        }),
        inputValue: ""
      });
    }

    event.preventDefault();
  };

  render() {
    return (
      <section className="chat">
        <Messages messages={this.state.messages} />
        <form autoComplete="off" className="text-input" onSubmit={this.send}>
          <input
            className="chat-input"
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value })}
            placeholder="Write here your message"
          />
          <button className="send-btn" type="sumbit">
            <FaPaperPlane size="1.8em" />
          </button>
        </form>
      </section>
    );
  }
}

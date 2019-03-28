import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./Chat.css";

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

  send = () => {
    var temp = [];
    this.state.messages.forEach(el => {
      el.seen = true;
      temp.push(el);
    });
    this.setState({
      messages: temp.concat({
        text: this.state.inputValue,
        sent: true,
        date: new Date()
      }),
      inputValue: ""
    });
  };

  render() {
    return (
      <section className="chat">
        <Messages messages={this.state.messages} />
        <div className="text-input">
          <Input
            type="chat-input"
            id="chat-input"
            value={this.state.inputValue}
            change={event => this.setState({ inputValue: event.target.value })}
            send={this.send}
            placeholder="Write here your message"
          />
          <button className="send-btn" onClick={this.send}>Invia</button>
        </div>
      </section>
    );
  }
}

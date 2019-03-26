import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";

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
  render() {
    return (
      <section className="chat">
        <Messages messages={this.state.messages} />
        <Input
          type="chat-input"
          value={this.state.inputValue}
          change={event => this.setState({ inputValue: event.target.value })}
          enter={event => {
            if (event.which === 13) {
              var temp = [];
              this.state.messages.forEach(el => {
                el.seen = true;
                temp.push(el);
              });
              this.setState({
                messages: temp.concat({
                  text: event.target.value,
                  sent: true,
                  date: new Date()
                }),
                inputValue: ""
              });
            } else if (event.which === 110) {
              this.setState({
                messages: this.state.messages.concat({
                  text: event.target.value,
                  sent: false,
                  date: new Date()
                }),
                inputValue: ""
              });
            }
          }}
        />
      </section>
    );
  }
}

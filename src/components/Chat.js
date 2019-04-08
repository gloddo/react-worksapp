import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./Chat.css";
import { FaPaperPlane } from "react-icons/fa";
import {getMessages} from './utils'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      messages: []
    };
  }

  componentDidMount() { 
    getMessages((result=>
      this.setState({messages: result})
    ),this.props.match.params.id)
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
          <Input
            class="chat-input"
            id="chat-input"
            value={this.state.inputValue}
            change={event => this.setState({ inputValue: event.target.value })}
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

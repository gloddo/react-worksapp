import React, { Component } from "react";
import Messages from "./Messages";
import "./Chat.css";
import { FaPaperPlane } from "react-icons/fa";
import { sendMessages } from "./utils";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  componentDidUpdate() {
    document
      .querySelector(".chat")
      .scrollTo(0, document.querySelector(".chat").scrollHeight);
  }

  componentDidMount() {
    console.log(this.props.messages);
    
    this.props.onMessages(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.onMessages(this.props.match.params.id)()
  }

  send = async event => {
    event.preventDefault();
    if (this.state.inputValue !== "") {
      await sendMessages(
        this.state.inputValue,
        new Date(),
        this.props.match.params.id,
        this.props.userLogin,
        "",
        "",
        ""
      );
      this.setState({ inputValue: "" });
    }
  };

  render() {
    return (
      <section className="chat">
        <Messages
          messages={this.props.messages[this.props.match.params.id]}
          userLogin={this.props.userLogin}
        />
        <form autoComplete="off" className="text-input" onSubmit={this.send}>
          <input
            className="chat-input"
            value={this.state.inputValue}
            onChange={event =>
              this.setState({ inputValue: event.target.value })
            }
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

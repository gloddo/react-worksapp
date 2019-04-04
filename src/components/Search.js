import React, { Component } from "react";
import "./Search.css";
import { autocomplete } from "./utils";
import ChatListEntry from "./ChatListEntry";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  onchangeInput = (event, chats) => {
    let results = autocomplete(event.target.value, chats);
    this.props.fn(results);
  };
  render() {
    return (
      <div className="search-tab">
        <div className="search">
          <input onChange={e => this.onchangeInput(e, this.props.chats)} />
        </div>
        <section className="chat-list-search">
          {this.props.state.map(([id, obj]) => {
            return (
                <ChatListEntry
                  key={id}
                  img={obj.img}
                  name={obj.name}
                  id={id}
                  surname={obj.surname}
                  role={obj.role}
                  state={obj.state}
                  selected={id === this.state.selected}
                  click={() => {
                    this.setState({ selected: id });
                  }}
                />
            );
          })}
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Search.css";
import { autocomplete } from "./utils";
import ChatListEntry from "./ChatListEntry";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      usersSearch: []
    };
  }
  onchangeInput = (event, users) => {
    let results = autocomplete(event.target.value, users);
    this.setState({usersSearch: results})
    console.log(results)
  };
  render() {
    return (
      <div className="search-tab">
        <div className="search">
          <input onChange={e => this.onchangeInput(e, this.props.users)} />
        </div>
        <section className="chat-list-search">
          {this.state.usersSearch.map((element) => {
            return (
                <ChatListEntry
                  key={element.id}
                  img={element.img}
                  name={element.name}
                  id={element.id}
                  surname={element.surname}
                  role={element.role}
                  state={element.state}
                  selected={element.id === this.state.selected}
                  click={() => {
                    this.setState({ selected: element.id });
                  }}
                />
            );
          })}
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Search.css";
import { autocomplete } from "./utils";
import ChatListEntry from "./ChatListEntry";
import { Link } from "react-router-dom";


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  onchangeInput = (event, chats) => {
    let prova = autocomplete(event.target.value,chats)
    this.props.fn(prova)
    }
  render() {
    return (
      <div className="search-tab">
        <div className="search">
          <input 
            onChange={(e)=> this.onchangeInput(e, this.props.chats)} 
            value={this.props.stateSearch}>
          </input>
        </div>
        <section className="chat-list-search">
          {this.props.state.map((el, i) => {
            return (
              <Link key={i} className="plain-text" to={`/chat/${i}`}>
                <ChatListEntry
                  key={i}
                  img={el.img}
                  name={el.name}
                  surname={el.surname}
                  role={el.role}
                  date={el.date}
                  state={el.state}
                  selected={i === this.state.selected}
                  click={() => {
                    this.setState({ selected: i });
                  }}
                />
                </Link>
            );
          })}
      </section>
      </div>
    );
  }
}

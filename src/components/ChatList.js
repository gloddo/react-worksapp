import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";
import NewChat from "./NewChat";
import { Link } from "react-router-dom";


export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
    return (
      <section className="chat-list">
        {this.props.chats.map((el, i) => {
          return (
            <Link key={i} className="plain-text" to={`/chat/${i}`}>
              <ChatListEntry
                key={i}
                img={el.img}
                name={el.name}
                surname={el.surname}
                role={el.role}
                date={el.date}
                notify={el.notify}
                state={el.state}
                selected={i === this.state.selected}
                click={() => {
                  this.setState({ selected: i });
                }}
              />
            </Link>
          );
        })}

        <NewChat chats={this.state.chats} role={this.state.role} />
        <FavouritesBar favourites={this.state.favourites} />
      </section>
    );
  }
}

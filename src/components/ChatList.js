import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import PropTypes from "prop-types";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";
import NewChat from "./NewChat";

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
        {this.props.chats.map(([id, obj]) => {
          return (
            <ChatListEntry
              key={id}
              id={id}
              img={obj.img}
              name={obj.name}
              surname={obj.surname}
              role={obj.role}
              date={obj.date}
              notify={obj.notify}
              state={obj.state}
              selected={id === this.state.selected}
            />
          );
        })}

        <FavouritesBar favourites={this.props.chats} />
      </section>
    );
  }
}
NewChat.propTypes = {
  role: PropTypes.array,
  chats: PropTypes.array
};

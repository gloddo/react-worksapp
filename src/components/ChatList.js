import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import PropTypes from "prop-types";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";
import NewChat from "./NewChat";

export default class ChatList extends Component {

  render() {
    console.log(this.props.chats);
     
    return (
      <section className="chat-list">
        {this.props.chats.map((chat) => {
          let user = this.props.users[chat.partecipants]
          return (
            <ChatListEntry
              key={user.id}
              url={`/chat/${chat.id}`}
              img={user.img}
              name={user.name}
              surname={user.surname}
              role={user.role}
              date={chat.date}
              notify={chat.notify}
              state={user.state}
            />
          );
        })}

        <FavouritesBar favourites={this.props.chats} users={this.props.users}/>
      </section>
    );
  }
}
NewChat.propTypes = {
  chats: PropTypes.array
};

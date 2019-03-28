import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry";
import "./ChatList.css";
import FavouritesBar from "./FavouritesBar";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      
    };
  }

  render() {
    return (
      <section className="chat-list">
        {this.props.chats.map((el, i) => {
          return (
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
          );
        })}
        <FavouritesBar click={this.props.click} favourites={this.props.chats}/>
      </section>
    );
  }
}

import React, { Component } from "react";
import { FaSearch, FaBars, FaAngleLeft, FaPaperclip } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import Label from "./Label";

class ChatNavbar extends Component {
  render() {
    const chat = this.props.chats.find(
      chat => chat.id === this.props.match.params.id
    );
    if (!chat) {
      return null;
    }
    const user = this.props.users[chat.partecipants];

    return (
      <nav className="navbar">
        <ul>
          <FaAngleLeft className="n-icon" onClick={this.props.history.goBack} />
          <FaSearch className="n-icon" onClick={this.props.showSearch} />
          <ProfilePic state={user.state} modal={true} img={user.img} />
          <FaPaperclip
            className="n-icon"
            onClick={() => {
              document.querySelector("#upload").click();
            }}
          />
          <input id="upload" accept="image/*, video/*" onChange={e => {
            const file = e.target.files[0]          
            this.props.upload(file, "chat", chat.id, this.props.uid)
          }} type="file" style={{ display: "none" }} />
          <FaBars className="n-icon" onClick={this.props.openMenu} />
        </ul>
        <div className="chat-label">
          <Label
            name={user.name}
            surname={user.surname}
            role={" - " + user.role}
          />
        </div>
      </nav>
    );
  }
}

export default ChatNavbar;

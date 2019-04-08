import React, { Component } from "react";
import { FaSearch, FaBars, FaAngleLeft, FaPaperclip } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import Label from "./Label";

class ChatNavbar extends Component {
  render() {
    let user = this.props.chat;
    return (
      <div>
        <ul>
          <FaAngleLeft className="n-icon" onClick={this.props.history.goBack} />
          <FaSearch className="n-icon" onClick={this.props.showSearch} />
          <ProfilePic
            state={this.props.state}
            modal={true}
            img={this.props.img}
          />
          <FaPaperclip className="n-icon" onClick={this.props.upload} />
          <FaBars className="n-icon" onClick={this.props.openMenu} />
        </ul>
        <div className="chat-label">
          <Label
            //name={user.name}
            //surname={user.surname}
            //role={" - "+user.role}
          />
        </div>
      </div>
    );
  }
}

export default ChatNavbar;

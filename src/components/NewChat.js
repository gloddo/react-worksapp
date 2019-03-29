import React, { Component } from "react";
import PropTypes from "prop-types";
// import Label from "./Label";
// import ProfilePic from "./ProfilePic";
import ChatListEntry from "./ChatListEntry";
export default class NewChat extends Component {
  render() {
    return this.props.role.map((el, i) => (
      <div>
        {el}
        {this.props.chats.map((e, i) => (
          <article>
            {el == e.role && (
              // <div>
              //   <ProfilePic img={e.img} modal={true} state={e.state} />
              //   <Label
              //     name={e.name}
              //     surname={e.surname}
              //     role={undefined}
              //     className="name"
              //   />
              // </div>
              <ChatListEntry
                img={e.img}
                modal={true}
                state={e.state}
                name={e.name}
                surname={e.surname}
                role={undefined}
                className="name"
              />
            )}
          </article>
        ))}
      </div>
    ));
  }
}

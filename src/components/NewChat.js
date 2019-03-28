import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "./Label";
export default class NewChat extends Component {
  render() {
    return this.props.chats.map((el, i) => (
      <div>
        {el.role}
        {this.props.chats.map((e, i) => (
          <div>
            {el.role == e.role && (
              <Label
                name={e.name}
                surname={e.surname}
                role={e.role}
                class="name"
              />
            )}
          </div>
        ))}
      </div>
    ));
  }
}

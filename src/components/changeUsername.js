import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EditProfile extends Component {
  render() {
    return (
      <div>
        <label>Change username</label>
        <input
          className="change-username-input"
          type="username"
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        <button onClick={"ciso"} />
      </div>
    );
  }
}

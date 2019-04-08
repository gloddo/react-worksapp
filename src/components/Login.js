import React, { Component } from "react";
import "./Login.css";
import logo from "./res/logo-blk-b.png";

import { login } from "./utils";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  login = e => {
    e.preventDefault();
    login(this.state.username, this.state.password).then(uid =>
      this.props.setLogOn(uid)
    );
  };
  render() {
    return (
      <div className="login-all">
        <div className="login-logo">
          <img className="login-logo" src={logo} alt="logo" />
        </div>
        <form
          className="login-form"
          action=""
          method="POST"
          onSubmit={this.login}
        >
          <p className="login-label">Username</p>
          <input
            className="login-input"
            type="email"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <p className="login-label">Password</p>
          <input
            className="login-input"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <span className="check">
            <input
              className="chekbox"
              type="checkbox"
              name="remember-me"
              defaultValue
            />
            <p className="check-label">Remember me?</p>
          </span>
          <button type="submit" name="button" onClick={this.login}>
            Submit
          </button>
          <a className="forgot-password" href="/">
            Forgot password?
          </a>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Login.css";
import logo from "./res/logo-blk-b.png";

export default class Login extends Component {
  render() {
    return (
      <div className="login-all">
        <div className="login-logo">
          <img className="login-logo" src={logo} alt="logo" />
        </div>
        <form className="login-form" onsubmit="">
          <p className="login-label">Username</p>
          <Input className="login-input" value={this.props.username} />
          <p className="login-label">Password</p>
          <Input className="login-input" value={this.props.password} />
          <span className="check">
            <Input
              className="chekbox"
              type="checkbox"
              name="remember-me"
              defaultValue
            />
            <p className="check-label">Remember me?</p>
          </span>
          <Button type="button" name="button" onclick="login()">
            Submit
          </Button>
          <a className="forgot-password" href="#">
            Forgot password?
          </a>
        </form>
      </div>
    );
  }
}

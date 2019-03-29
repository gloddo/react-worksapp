import React, { Component } from "react";
import Input from "./Input";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <p className="login-label">Username</p>
          <Input name={this.props.name} />
          <p className="login-label">Password</p>
          <Input name={this.props.name} />
          <span className="check">
            <input
              className="chekbox"
              type="checkbox"
              name="remember-me"
              defaultValue
            />
            <p className="check-label">Remember me?</p>
          </span>
          <button type="button" name="button" onclick="login()">
            Submit
          </button>
          <a className="forgot-password" href="#">
            Forgot password?
          </a>
        </form>
      </div>
    );
  }
}

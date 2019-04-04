import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Login.css";
import logo from "./res/logo-blk-b.png";
import * as firebase from "firebase";

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
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => console.log("aaa"))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
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
          <Input
            change={e =>
              this.setState({
                username: e.target.value
              })
            }
            id="username"
            className="login-input"
            value={this.props.username}
          />
          <p className="login-label">Password</p>
          <Input
            change={e =>
              this.setState({
                password: e.target.value
              })
            }
            id="password"
            className="login-input"
            value={this.props.password}
          />
          <span className="check">
            <Input
              className="chekbox"
              type="checkbox"
              name="remember-me"
              defaultValue
            />
            <p className="check-label">Remember me?</p>
          </span>
          <Button type="submit" name="button">
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

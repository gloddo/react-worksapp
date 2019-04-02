import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NewPassword.css";
import { unwatchFile } from "fs";
import Button from "./Button";
import Input from "./Input";

export default class NewPassword extends Component {
  render() {
    return (
      <div className="new-password-all">
        <form className="login-form">
          <h2>Change Password</h2>
          <p className="login-label">Old password</p>
          <Input
            className="login-input"
            type="text"
            name="username"
            value={undefined}
          />
          <p className="login-label">New password</p>
          <Input
            className="login-input"
            type="text"
            name="password"
            value={undefined}
          />
          <p className="login-label">Confirm password</p>
          <Input
            className="login-input"
            type="text"
            name="username"
            value={undefined}
          />
          <Button type="button" name="button">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

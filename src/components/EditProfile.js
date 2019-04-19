import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import "./EditProfile.css";
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeUsername: true,
      changePassword: true
    };
  }
  changeUse() {
    if (this.state.changeUsername) return "Change username";
    return (
      <div>
        <input type="text" />
        <button type="button">submit</button>
      </div>
    );
  }
  changePass() {
    if (this.state.changePassword) return "Change password";
    return (
      <div>
        <input type="text" />
        <button type="button">submit</button>
      </div>
    );
  }
  render() {
    return (
      <div className="profile-container">
        <ProfilePic img={this.props.img} state={this.props.state} />
        <div className="label-block">
          <div onClick={() => document.querySelector("#change-photo").click()}>
            <input
              className="profile-label"
              onChange={e => {
                const file = e.target.files[0];
                this.props.upload(file, "user", this.props.uid);
              }}
              accept="image/*"
              type="file"
              id="change-photo"
              style={{ display: "none" }}
            />
            Change photo
          </div>
          <div
            className="profile-label"
            onClick={() => {
              this.setState({
                changeUsername: !this.state.changeUsername
              });
              console.log(this.state.changeUsername);
            }}
          >
            {this.changeUse()}
          </div>

          <div
            className="profile-label"
            onClick={() => {
              this.setState({
                changePassword: !this.state.changePassword
              });
              console.log(this.state.changePassword);
            }}
          >
            {this.changePass()}
          </div>
        </div>
      </div>
    );
  }
}

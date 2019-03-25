import React, { Component } from "react";
import ProfilePic from "./ProfilePic"

export default class ChatList extends Component {
    render() {
        let array = [0,1,2,3,4,5];
        return (
            array.forEach(()=>{
                <ProfilePic img={this.props.img} state={this.props.state} />
            })
        )
    }
    

}
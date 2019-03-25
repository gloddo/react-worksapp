import React, { Component } from "react";
import ProfilePic from "./ProfilePic"

<<<<<<< HEAD
export default class FavouriteList extends Component {
    render() {
        return this.props.chats.map((el, i) => {
            return (
                    <ProfilePic key={i} img={el.img} state={el.state} />
                )
            
        })
    }
=======
export default class ChatList extends Component {
    render() {
        let array = [0,1,2,3,4,5];
        return (
            array.forEach(()=>{
                <ProfilePic img={this.props.img} state={this.props.state} />
            })
        )
    }
    

>>>>>>> 4f58db68c3ea8b1ef4bc1fbc50ccb35b6376c345
}
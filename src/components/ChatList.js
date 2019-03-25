import React, { Component } from "react";
import ChatListEntry from "./ChatListEntry"

export default class ChatList extends Component {
    render() {
        let array = [0,1,2,3,4,5];
        return (
            array.forEach(()=>{
                <ChatListEntry />
            })
        )
    }
    

}
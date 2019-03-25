import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaAngleRight } from "react-icons/fa"
import FavouriteList from "./FavouriteList"


export default class FavouriteNavbar extends Component {
    render() {
        return (
            <div>
                <FaRegStar />
                <div>
                    <FavouriteList chats={this.props.chats} />
                </div>
                <FaAngleRight />
            </div>
        )  
    
    }
}
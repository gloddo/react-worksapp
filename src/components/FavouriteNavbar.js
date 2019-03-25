import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { FaRegStar, FaAngleRight } from "react-icons/fa"
import FavouriteList from "./FavouriteList"
=======
import { FaRegStar } from "react-icons/fa"
>>>>>>> 4f58db68c3ea8b1ef4bc1fbc50ccb35b6376c345


export default class FavouriteNavbar extends Component {
    render() {
        return (
            <div>
                <FaRegStar />
                <div>
<<<<<<< HEAD
                    <FavouriteList chats={this.props.chats} />
=======
                    <FavouriteList img={this.props.img} state={this.props.state} />
>>>>>>> 4f58db68c3ea8b1ef4bc1fbc50ccb35b6376c345
                </div>
                <FaAngleRight />
            </div>
        )  
    
    }
}
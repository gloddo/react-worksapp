import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa"


export default class FavouriteNavbar extends Component {
    render() {
        return (
            <div>
                <FaRegStar />
                <div>
                    <FavouriteList img={this.props.img} state={this.props.state} />
                </div>
                <FaAngleRight />
            </div>
        )  
    
    }
}
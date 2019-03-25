import React, { Component } from "react";

export default class Date extends Component {
    render() {
        return (
            this.props.notify && <span className="notify-badge">
                {this.props.notify>99?"99+":this.props.notify}
            </span>
        )
    }
}
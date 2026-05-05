import React from "react";
import "./ribbon.css"

export class Ribbon extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                <h1>{this.props.ribbon}</h1>
            </div>
        )
    }
}
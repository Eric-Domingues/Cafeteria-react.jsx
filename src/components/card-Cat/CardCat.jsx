import React from "react";
import "./cardCat.css"


export class CardCat extends React.Component{
    render(){
        return(
            <section>
                <div id="card-imgcat">
                <img id="cat-img" src={this.props.thumnail} alt="cat" />
                <div id="card-content">
                <h1>{this.props.title}</h1>
                <p>{this.props.Description}</p>
                </div>
                </div>
            </section>
        )
    }
}
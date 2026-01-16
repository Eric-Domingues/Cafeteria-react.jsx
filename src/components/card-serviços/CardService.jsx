import React from "react";
import "./cardService.css"

export class CardService extends React.Component{
    render(){
        return(
            <article>
                <div id="card-servico">
                <img src={this.props.thumnail} alt="" />
                
                    <h2>{this.props.title}</h2>
                    
                    <p>{this.props.Description}</p>
                </div>
            </article>
        )
    }
}

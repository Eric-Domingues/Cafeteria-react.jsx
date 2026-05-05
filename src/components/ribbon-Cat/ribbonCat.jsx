import React from "react";
import "./ribbonCat.css"

export class RibbonCat extends React.Component{
    render(){
        return(
            <section id="ribbon-sect">
            <div id="ribbon-left"></div>
            <div id="ribbon-Cat">
                <h1>Saiba mais aqui</h1>
            </div>
            <div id="ribbon-right"></div>
            </section>
        )
    }
}
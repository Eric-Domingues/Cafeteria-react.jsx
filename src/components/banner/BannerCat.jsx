import React from "react";
import "./bannerCat.css"
import bannerImg from "../../assets/images/banner.png"

export class BannerCat extends React.Component{
    render(){
        return(
            <section id="banner">
                <div id="text_cofe">
                    <h1>O Melhor café</h1>
                    <h1>É feito com</h1>
                    <h1>Amor</h1>
                    <h1>E patinhas</h1>
                </div>
                <div id="img_cat">
                    <img id="banner_img" src={bannerImg} alt="cat"></img>
                </div>
            </section>
        )
    }
}
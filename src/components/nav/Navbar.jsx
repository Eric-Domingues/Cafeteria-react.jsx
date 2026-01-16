import React from "react";
import logoImg from "../../assets/images/logo1.png"
import "./navbar.css"

export class NavBar extends React.Component {
    render(){
    return(
        <header>
            <nav id="navbar">
                <div className="navlogo">
                <img src={logoImg} alt="logo"/>
                <h1>The Daily<br/>Grind</h1>
                </div>
                    <ul id="nav-list">
                        <li><a href="/">aba1</a></li>
                        <li><a href="/">aba2</a></li>
                        <li><a href="/">aba3</a></li>
                        <li className="button-login"><a className="button-color" href="/">cadastre-se</a></li>
                    </ul>
            </nav>
        </header>
    );
    }
}


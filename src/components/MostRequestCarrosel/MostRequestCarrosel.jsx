import React from "react";
import "./MostRequestCarrosel.css"
import line from "../../assets/images/Line.png"

export class MostRequestedCarrosel extends React.Component{
      constructor(props) {
        super(props);
    
        this.carouselRef = React.createRef();
    
      }
    
      scrollLeftBtn = () => {
        this.carouselRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      };
    
      scrollRightBtn = () => {
        this.carouselRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      };
    render(){

        return(
            <div>
             <div className="p-most">
          <img className="line-most" src={line} alt="" />
          <p className="p-bebidas">{this.props.title}</p>
          <img className="line-most" src={line} alt="" />
        </div>

        <div className="center-carousel">
          <div className="carousel-wrapper">

            <button className="btn left" onClick={this.scrollLeftBtn}>
              ←
            </button>

            <div className="carousel">
              <div
                className="inner"
                ref={this.carouselRef}
              >
                {this.props.thumbnail.map((img, index) => (
                  <div className="item" key={index}>
                    <img src={img} alt="prato" />
                  </div>
                ))}
              </div>
            </div>

            <button className="btn right" onClick={this.scrollRightBtn}>
              →
            </button>

          </div>
        </div>
        </div>
        )
    }
}
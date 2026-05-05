import React from "react";
import "./mostRequested.css";
import { Ribbon } from "../ribbon/Ribbon";
import bebida1 from "../../assets/images/bebida1.png"
import bebida2 from "../../assets/images/bebida2.png"
import bebida3 from "../../assets/images/bebida3.png"
import bebida4 from "../../assets/images/bebida4.png"
import lanches1 from "../../assets/images/lanches1.png"
import lanches2 from "../../assets/images/lanches2.png"
import lanches3 from "../../assets/images/lanches3.png"
import lanches4 from "../../assets/images/lanches4.png"
import { MostRequestedCarrosel } from "../MostRequestCarrosel/MostRequestCarrosel";

export class MostRequested extends React.Component {


  render() {
    const imagensBebidas = [bebida1, bebida2, bebida3, bebida4];
    const imagensLanches = [lanches1, lanches2, lanches3, lanches4]

    return (
      <section id="requested-background">
        <Ribbon ribbon="Mais pedido:" id="requested-ribbon" />
        <MostRequestedCarrosel
          title="Bebidas"
          thumbnail={imagensBebidas}
        />
        <MostRequestedCarrosel
          title="Lanches"
          thumbnail={imagensLanches}
        />
      </section>
    );
  }
}
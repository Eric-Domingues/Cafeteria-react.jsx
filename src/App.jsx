import { useEffect, useState } from "react";
import {NavBar} from "./components/nav/Navbar";
import "./styles/app.css"
import {CardService} from "./components/card-serviços/CardService"
import {Ribbon} from "./components/ribbon/Ribbon"
import {BannerCat} from "./components/banner/BannerCat";
import {AboutUs} from "./components/aboutUs/AboutUs";
import serviceimg1 from "./assets/images/service1.png"
import serviceimg2 from "./assets/images/service2.png"
import serviceimg3 from "./assets/images/service3.png"
import serviceimg4 from "./assets/images/service4.png"
import { CardCat } from "./components/card-Cat/CardCat";
import { RibbonCat } from "./components/ribbon-Cat/ribbonCat";
import { MostRequested } from "./components/most-requested/MostRequested";

function App() {

  const [gatos, setGatos] = useState([]);

useEffect(() => {
  async function pegarDados() {
    const cats = [1,2,3,4].map(async (_, i) => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();


      return {
        nome: data.results[0].name.first,
        imagem: `https://cataas.com/cat?${Date.now()}-${i}`
      };
    });

    const resultado = await Promise.all(cats);
    setGatos(resultado);
  }

  pegarDados();
}, []);

  return (
    <>
    <NavBar></NavBar>
    <div>
      <BannerCat></BannerCat>
    </div>
    <div>
    <AboutUs></AboutUs>
    </div>
    <div>
    <Ribbon ribbon="Adote aqui:" id= "servico-titulo"></Ribbon>
    </div>
    <div id="card-CatApp">
      {gatos.map((gato, index) => (
        <CardCat
        key={index}
        title={gato.nome}
        Description="descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
        thumnail={gato.imagem}
        />
      ))}
    </div>
      <RibbonCat></RibbonCat>
      <div>
        <MostRequested></MostRequested>
      </div>
    <div>
    <Ribbon ribbon="Nossos Serviços:" id= "servico-titulo"></Ribbon>
    </div>
    <section id="app-card">
    <CardService title= "Pastel" Description="DescriptionDescriptionDescriptionDescriptionDescriptionDescription" thumnail= {serviceimg1}></CardService>
    <CardService title= "Milkshake" Description="DescriptionDescriptionDescriptionDescriptionDescriptionDescription" thumnail= {serviceimg2}></CardService>
    <CardService title= "Cafe Passado" Description="DescriptionDescriptionDescriptionDescriptionDescriptionDescription" thumnail= {serviceimg3}></CardService>
    <CardService title= "Chá" Description="DescriptionDescriptionDescriptionDescriptionDescriptionDescription" thumnail= {serviceimg4}></CardService>
    </section>
    </>
  );
}

export default App;

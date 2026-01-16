import {NavBar} from "./components/nav/Navbar";
import "./styles/app.css"
import {CardService} from "./components/card-serviços/CardService"
import {Ribbon} from "./components/ribbon/Ribbon"
import serviceimg1 from "./assets/images/service1.png"
import serviceimg2 from "./assets/images/service2.png"
import serviceimg3 from "./assets/images/service3.png"
import serviceimg4 from "./assets/images/service4.png"
function App() {
  return (
    <>
    <NavBar></NavBar>
    <div>
    <Ribbon ribbon="Nossos Serviços:"></Ribbon>
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

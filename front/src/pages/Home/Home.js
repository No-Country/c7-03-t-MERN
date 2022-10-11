import {
  CardCancha,
  Footer,
  Description,
  Header,
  Nosotros,
  Click,
  PagoProceso,
} from "../../components";
import data from "../../utils/canchas.json";
import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Description />
      <Nosotros />
      <Click />
      <PagoProceso />
      <div className="canchas__container">
        <h2 className="canchas__title">Canchas destacadas</h2>
        <div className="canchas__list">
          {data.canchas.map((e) => (
            <CardCancha key={e.id} data={e} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

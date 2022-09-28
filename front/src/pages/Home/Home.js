import { CardCancha } from "../../components";
import data from "../../utils/canchas.json";
import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <div className="canchas__container">
        <h2 className="canchas__title">Canchas destacadas</h2>
        <div className="canchas__list">
          {data.canchas.map((e) => (
            <CardCancha
              key={e.id}
              name={e.name}
              location={e.location}
              price={e.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Click.css";
import img from "../../assets/images/img-click.png";
import icon from "../../assets/icons/tilde.svg";

function Click() {
  return (
    <div className="click-contenedor">
      <div className="rectangle-div">
        <h2 className="click-titulo">Con solo un click</h2>
        <ul className="click-list">
          <li>
            <img className="click-icon" alt="Click" src={icon} />
            <p className="click-p">
              Cancha de tenís, futbol, basquetball y padel
            </p>
          </li>
          <li>
            <img className="click-icon" alt="Click" src={icon} />
            <p className="click-p">Reservala desde la comodidad de tu casa</p>
          </li>
          <li>
            <img className="click-icon" alt="Click" src={icon} />
            <p className="click-p">
              Invita a tus amigos a pasar una tarde juntos
            </p>
          </li>
          <li>
            <img className="click-icon" alt="Click" src={icon} />
            <p className="click-p">Canchas muy cerca de tu localidad</p>
          </li>
        </ul>
      </div>
      <div className="cantainer-img">
        <img className="click-img" alt="" src={img} />
      </div>
    </div>
  );
}

export default Click;

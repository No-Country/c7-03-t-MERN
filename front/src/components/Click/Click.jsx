import React from "react";
import "./Click.css";
import img from "../../assets/images/img-click.png";
import icon from "../../assets/icons/tilde.svg";

function Click() {
  return (
    <div className="click-div">
      <div className="rectangle-div">
        <h2 className="click-titulo">Con solo un click</h2>
        <p className="click-p1">Cancha de tenís, futbol, basquetball y padel</p>
        <p className="click-p2">Reservala desde la comodidad de tu casa</p>
        <p className="click-p3">Invita a tus amigos a pasar una tarde juntos</p>
        <p className="click-p4">Canchas muy cerca de tu localidad</p>
        <img className="click-img" alt="" src={img} />
        <img
          className="click-icon-1"
          id="check-click"
          check-click
          alt=""
          src={icon}
        />
        <img
          className="click-icon-2"
          id="check-click"
          check-click
          alt=""
          src={icon}
        />
        <img
          className="click-icon-3"
          id="check-click"
          check-click
          alt=""
          src={icon}
        />
        <img
          className="click-icon-4"
          id="check-click"
          check-click
          alt=""
          src={icon}
        />
      </div>
    </div>
  );
}

export default Click;

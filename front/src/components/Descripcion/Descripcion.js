import React from "react";
import "./Descripcion.css";
import Iconoball from "../../assets/icons/basketBall.svg";
import IconoCalend from "../../assets/icons/bi_calendar-date-fill.png";
import IconoHouse from "../../assets/icons/house.svg";


function Descripcion() {
  return (
    <div className="contenedor-principal">
      <span className="subtitle__descripcion">NUESTROS SERVISIOS</span>
      <h2 className="titulo-descripcion">Que ofrecemos</h2>
      <div className="contenedor-descripcion">
        <div className="contenedor-carta">
          <img className="icono-descripcion" src={Iconoball} alt="iconoball" />
          <div className="vector"></div>
          <p className="parrafo">
          we help you to be the bridge between your sports moments and the highest quality facilities, you can find courts from soccer to tennis, try it free for 30 days and see how easy we are
          </p>
        </div>
        <div className="contenedor-carta">
          <img className="icono-descripcion" src={IconoCalend} alt="iconocalend" />
          <div className="vector"></div>
          <p className="parrafo">
          we help you to be the bridge between your sports moments and the highest quality facilities, you can find courts from soccer to tennis, try it free for 30 days and see how easy we are
          </p>
        </div>
        <div className="contenedor-carta">
          <img className="icono-descripcion" src={IconoHouse} alt="iconohouse" />
          <div className="vector"></div>
          <p className="parrafo">
          we help you to be the bridge between your sports moments and the highest quality facilities, you can find courts from soccer to tennis, try it free for 30 days and see how easy we are
          </p>
        </div>
        
      </div>
    </div>
  );
}
export default Descripcion;

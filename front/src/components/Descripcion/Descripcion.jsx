import images from "../../assets/images";
import "./Descripcion.css";
import React from "react";

function Descripcion() {
  return (
    <div className="contenedor-principal">
      <span className="subtitle__descripcion">NUESTROS SERVICIOS</span>
      <h2 className="titulo-descripcion">Que ofrecemos</h2>
      <div className="contenedor-descripcion">
        <div className="contenedor-carta">
          <img
            className="icono-descripcion"
            src={images.Ball_icon}
            alt="iconoball"
          />
          <div className="vector"></div>
          <p className="parrafo">
            Busca y alquila la cancha que más te guste y que se adapte al
            deporte que quieras practicar, nuestra idea es brindarte un servicio
            que sea fácil y rápido. Sin complicarte mucho la cabeza.{" "}
          </p>
        </div>
        <div className="contenedor-carta">
          <img
            className="icono-descripcion"
            src={images.Calendary_icon}
            alt="iconocalend"
          />
          <div className="vector"></div>
          <p className="parrafo">
            Contamos con numerosas fechas disponibles, cada cancha tiene fechas
            disponibles. Podras elegir la que más se adapte a tu disponibilidad
            horaria.{" "}
          </p>
        </div>
        <div className="contenedor-carta">
          <img
            className="icono-descripcion"
            src={images.House_icon}
            alt="iconohouse"
          />
          <div className="vector"></div>
          <p className="parrafo">
            Con nuestro sencillo servicio puedes alquilar una cancha desde la
            comodidad de tu casa. Se acabo lo de tener que ir a hablar con x
            persona para hacer una reserva. En esta web te ofrecemos la
            posibilidad de reservar con una enorme variedad de campos
            deportivos.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Descripcion;

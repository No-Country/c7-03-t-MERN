import React from "react";
import "./PasosReserva.css";
import img1 from "../../assets/icons/icon-pasos-reserva-ligth.svg";
import img2 from "../../assets/icons/icon-pasos-reserva-bold.svg";

function PasosReserva() {
  return (
    <div className="container-pagos-reserva">
      <div className="card-pagos-reserva">
        <p className="pagos-reserva-texto-1">Login</p>
        <p className="pagos-reserva-texto-2">Detalles de la reserva</p>
        <p className="pagos-reserva-texto-3">Pago</p>
        <hr />
        <img className="icon-pagos-reserva-1" alt="" src={img1} />
        <img className="icon-pagos-reserva-2" alt="" src={img2} />
        <img className="icon-pagos-reserva-3" alt="" src={img1} />
      </div>
    </div>
  );
}

export default PasosReserva;

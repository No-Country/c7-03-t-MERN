import images from "../../assets/images";
import "./PasosReserva.css";
import React from "react";

function PasosReserva({ nextStep }) {
  return (
    <div className="container-pagos-reserva">
      <ul className="card-pagos-reserva">
        <li>
          <img
            className="icon-pagos-reserva-1"
            alt=""
            src={images.Check_icon_1}
          />
          <p className="pagos-reserva-texto-1">Login</p>
        </li>
        <li>
          <img
            className="icon-pagos-reserva-2"
            alt=""
            src={images.Check_icon_2}
          />
          <p className="pagos-reserva-texto-2">Detalles</p>
        </li>
        <li>
          {nextStep ? (
            <img src={images.Check_icon_2} alt="bold" />
          ) : (
            <img
              className="icon-pagos-reserva-3"
              alt=""
              src={images.Check_icon_1}
            />
          )}
          <p className="pagos-reserva-texto-3">Pago</p>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default PasosReserva;

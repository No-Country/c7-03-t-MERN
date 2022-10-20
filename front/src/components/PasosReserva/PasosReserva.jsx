import React from "react";
import "./PasosReserva.css";
import img1 from "../../assets/icons/icon-pasos-reserva-ligth.svg";
import img2 from "../../assets/icons/icon-pasos-reserva-bold.svg";

function PasosReserva({ nextStep }) {
  return (
    <div className="container-pagos-reserva">
      <ul className="card-pagos-reserva">
        <li>
          <img className="icon-pagos-reserva-1" alt="" src={img1} />
          <p className="pagos-reserva-texto-1">Login</p>
        </li>
        <li>
          <img className="icon-pagos-reserva-2" alt="" src={img2} />
          <p className="pagos-reserva-texto-2">Detalles</p>
        </li>
        <li>
          {nextStep ?
          <img src={img2} alt="bold" /> 
          : <img className="icon-pagos-reserva-3" alt="" src={img1}  />  
        }
          <p className="pagos-reserva-texto-3">Pago</p>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default PasosReserva;

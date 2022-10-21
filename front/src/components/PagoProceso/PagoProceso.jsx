import "./PagoProceso.css";
import img from "../../assets/images/pago-proceso-img.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function PagoProceso({ btn }) {
  const canchaReserva = useSelector((state) => state.canchaReserva);
  const dataReserva = useSelector((state) => state.dataReserva);

  const [imgCancha, setImgCancha] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://back-reserva.herokuapp.com/api/v1/fild/${canchaReserva._id}`
      )
      .then((res) => setImgCancha(res.data.fild.fildImgUrl[1].fildUrl));
  }, []);
  return (
    <div className="pago-card">
      <div className="pago-card-description">
        <img className="pago-proceso-img" alt="Imagen card" src={imgCancha} />
        <div>
          <h2 className="pago-proceso-titulo">{canchaReserva.nameFild}</h2>
          <p className="reserva-textos">
            {canchaReserva.sceneryId?.description}
          </p>
        </div>
      </div>
      <ul className="pago-card-list">
        <li>
          <p className="pago-data-p">Fecha y Horario</p>
          <p className="pago-fecha-texto">
            {dataReserva !== null
              ? dataReserva.date + " " + dataReserva.hour
              : "Sin definir"}
          </p>
        </li>
        <li>
          <p className="pago-data-p">Horas</p>
          <p className="pago-fecha-texto">
            {dataReserva !== null ? dataReserva.time : "Sin definir"}
          </p>
        </li>
        <li>
          <p className="pago-data-p">TOTAL (p/h)</p>
          {/* <i className="pago-horas">(Según la cantidad de horas)</i> */}
          <p className="pago-fecha-texto">
            {dataReserva !== null
              ? +dataReserva.time * canchaReserva.price
              : "Sin definir"}
          </p>
        </li>
      </ul>
      {btn && (
        <div className="containerPayFinishBtn">
          <button className="btn__pay__finish">Finalizar compra</button>
        </div>
      )}
    </div>
  );
}

export default PagoProceso;

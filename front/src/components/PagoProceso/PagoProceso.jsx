import "./PagoProceso.css";
import img from "../../assets/images/pago-proceso-img.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setModal } from "../../store/slices/modal.slice";
import {setDon} from "../../store/slices/reservada.slice"
import axios from "axios";

function PagoProceso({ btn }) {
  const canchaReserva = useSelector((state) => state.canchaReserva);
  const dataReserva = useSelector((state) => state.dataReserva);
  const dispatch = useDispatch();

  const [imgCancha, setImgCancha] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://back-reserva.herokuapp.com/api/v1/fild/${canchaReserva._id}`
      )
      .then((res) => setImgCancha(res.data.fild.fildImgUrl[1].fildUrl));
  }, []);

  const finalizar = () => {
    const dataBook = {
      price: dataReserva.time * canchaReserva.price,
      bookingDate: dataReserva.date,
      bookingTime: dataReserva.hour,
      sceneryId: canchaReserva.sceneryId._id,
      fildId: canchaReserva._id,
    };
    var config = {
      method: "post",
      url: "https://back-reserva.herokuapp.com/api/v1/bookings",
      headers: { Authorization: `Bearer ${localStorage.getItem("tokenUser")}` },
      data: dataBook,
    };
    axios(config).then((res) => {
      dispatch(setDon(res.data.newBooking))
      dispatch(
        setModal({
          status: "success",
          text: "Cancha reservada con exito",
          to: "/perfil",
          toName: "Dirigete a tu perfil",
        })
      );
    });
  };

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
          <button className="btn__pay__finish" onClick={finalizar}>
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}

export default PagoProceso;

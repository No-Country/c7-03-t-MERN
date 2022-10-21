import React from "react";
import "./CardCancha.css";
import img from "../../assets/images/cancha1.jpg";
import vectorBall from "../../assets/icons/basketBall.svg";
import vectorMap from "../../assets/icons/map.svg";
import vectorDollar from "../../assets/icons/dollar.svg";
import { useDispatch } from "react-redux";
import { setCanchaMondal } from "../../store/slices/cancha.slice";

function CardCancha({ data }) {
  const dispatch = useDispatch();

  const changeModal = () => {
    dispatch(setCanchaMondal(data));
  };

  return (
    <div className="card__cancha">
      <img className="card__img" src={img} alt="img" />
      <div className="card__container">
        <h4>
          {data.name}{" "}
          <img className="card__vector" src={vectorBall} alt="certor 1" />
        </h4>
        <div className="card__location">
          <img className="card__vector2" src={vectorMap} alt="certor 2" />
          {data.location}
        </div>
        <div className="card__location">
          <img className="card__vector2" src={vectorDollar} alt="certor 2" />
          {data.price + " / hs" || "1200"}
        </div>
        <button className="btn__card" onClick={changeModal}>
          Ver mas detalles
        </button>
      </div>
    </div>
  );
}

export default CardCancha;

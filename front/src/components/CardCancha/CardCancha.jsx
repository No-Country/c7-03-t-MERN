import { setCanchaMondal } from "../../store/slices/cancha.slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import images from "../../assets/images";
import axios from "axios";
import "./CardCancha.css";

function CardCancha({ data }) {
  const [imgCancha, setImgCancha] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://back-reserva.herokuapp.com/api/v1/fild/${data._id}`)
      .then((res) => setImgCancha(res.data.fild.fildImgUrl[0].fildUrl));
  }, []);

  const changeModal = () => {
    dispatch(setCanchaMondal(data));
  };

  return (
    <div className="card__cancha">
      <img className="card__img" src={imgCancha} alt="img" />
      <div className="card__container">
        <h4>
          {data.nameFild}{" "}
          <img className="card__vector" src={images.Ball_icon} alt="certor 1" />
        </h4>
        <div className="card__location">
          <img
            className="card__vector2"
            src={images.Vector_map}
            alt="certor 2"
          />
          {data.sceneryId.location}
        </div>
        <div className="card__location">
          <img
            className="card__vector2"
            src={images.Vector_dollar}
            alt="certor 2"
          />
          {data.price + " / hs"}
        </div>
        <button className="btn__card" onClick={changeModal}>
          Ver mas detalles
        </button>
      </div>
    </div>
  );
}

export default CardCancha;

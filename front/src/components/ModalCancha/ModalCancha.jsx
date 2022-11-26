import { setCanchaMondal } from "../../store/slices/cancha.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import images from "../../assets/images"
import { motion } from "framer-motion";
import "./modalCancha.css";
import axios from "axios";

function ModalCancha() {
  const modalData = useSelector((state) => state.chanchaModal);
  const token = localStorage.getItem("tokenUser");
  const [imgCancha, setImgCancha] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://back-reserva.herokuapp.com/api/v1/fild/${modalData._id}`)
      .then((res) => setImgCancha(res.data.fild.fildImgUrl[1].fildUrl));
  }, []);

  const closeModal = () => {
    dispatch(setCanchaMondal(null));
  };

  const changePage = () => {
    if (token !== null) {
      closeModal();
      navigate("/booking");
    } else {
      closeModal();
      navigate("/login");
    }
  };

  return (
    <div className="backdrop_modal">
      <motion.div
        initial={{ x: "200%" }}
        animate={{ x: "0" }}
        className="modal__container"
      >
        <div className="images__cancha">
          <img src={imgCancha} alt="" />
        </div>
        <div className="cancha__data">
          <button className="close" onClick={closeModal}>
            <img src={images.Close_icon} alt="" />
          </button>
          <div className="cancha__data__part1">
            <h3>Cancha de {modalData.sportId.nameSport}</h3>
            <button onClick={changePage}>Reservar cancha</button>
          </div>
          <h3>
            <img src={images.Map_icon_orange} alt="Location icon" />
            {modalData.sceneryId.location}
          </h3>
          <h3>
            {" "}
            <img src={images.Dollar_orange} alt="Dollar icon" />
            {modalData.price}/hs
          </h3>
          <h2>{modalData.nameFild}</h2>
          <h4>
            {" "}
            <img src={images.Person_icon} alt="Person icon" />
            {modalData.accountPerson} max
          </h4>
          <p>{modalData.sceneryId.description}</p>
          <div className="owner__information">
            <div className="owner__information__text">
              <img src={images.User_icon} alt="Usuario" />
              <div>
                <h5>Cancha publicada por:</h5>
                <h4>{modalData.sceneryId.user.userName}</h4>
              </div>
            </div>
            <img src={images.Share_icon} alt="Share_icon" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ModalCancha;

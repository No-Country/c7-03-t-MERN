import { setCanchaMondal } from "../../store/slices/cancha.slice";
import { useDispatch, useSelector } from "react-redux";
import close_icon from "../../assets/icons/close.svg";
import img from "../../assets/images/modal_cancha.png";
import location from "../../assets/icons/map_orange.svg";
import dollar from "../../assets/icons/dollar_orange.svg";
import person from "../../assets/icons/person.svg";
import share from "../../assets/icons/share.svg";
import user from "../../assets/icons/user.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./modalCancha.css";

function ModalCancha() {
  const modalData = useSelector((state) => state.chanchaModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("tokenUser")

  const closeModal = () => {
    dispatch(setCanchaMondal(null));
  };

  const changePage = () => {
    if(token !== null) {
      closeModal();
      navigate("/booking");
    }else{
      closeModal();
      navigate("/login")
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
          <img src={img} alt="" />
        </div>
        <div className="cancha__data">
          <button className="close" onClick={closeModal}>
            <img src={close_icon} alt="" />
          </button>
          <div className="cancha__data__part1">
            <h3>Cancha de {modalData.category}</h3>
            <button onClick={changePage}>Reservar cancha</button>
          </div>
          <h3>
            <img src={location} alt="Location icon" />
            {modalData.location}
          </h3>
          <h3>
            {" "}
            <img src={dollar} alt="Dollar icon" />
            {modalData.price}/hs
          </h3>
          <h2>{modalData.name}</h2>
          <h4>
            {" "}
            <img src={person} alt="Person icon" />
            {modalData.usuarios} max
          </h4>
          <p>{modalData.description}</p>
          <div className="owner__information">
            <div className="owner__information__text">
              <img src={user} alt="Usuario" />
              <div>
                <h5>Cancha publicada por:</h5>
                <h4>{modalData.dueño}</h4>
              </div>
            </div>
            <img src={share} alt="Share_icon" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ModalCancha;

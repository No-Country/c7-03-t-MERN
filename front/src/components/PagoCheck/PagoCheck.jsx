import { setModal } from "../../store/slices/modal.slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imges from "../../assets/images";
import { motion } from "framer-motion";
import "./PagoCheck.css";

function PagoCheck({ text, to, toName }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModal(null));
  };

  return (
    <motion.div
      initial={{ x: "200%" }}
      animate={{ x: "0" }}
      className="card-check"
    >
      <img className="icon-check" src={imges.Modal_check_icon} />
      <div className="texto-check">{text}</div>
      <Link className="boton-check" to={to} onClick={closeModal}>
        {toName}
      </Link>
    </motion.div>
  );
}

export default PagoCheck;

import "./PagoCheck.css";
import img from "../../assets/icons/icon-pago-check.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";
import { motion } from "framer-motion";

function PagoCheck({ text, to, toName }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModal(null));
  };

  return (
    <>
      <motion.div
        initial={{ x: "200%" }}
        animate={{ x: "0" }}
        className="card-check"
      >
        <img className="icon-check" alt="" src={img} />
        <div className="texto-check">{text}</div>
        <Link className="boton-check" to={to} onClick={closeModal}>
          {toName}
        </Link>
      </motion.div>
    </>
  );
}

export default PagoCheck;

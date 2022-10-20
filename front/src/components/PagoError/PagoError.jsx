import "./PagoError.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";
import img from "../../assets/icons/icon-pago-error.svg";
import { motion } from "framer-motion";

function PagoError() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModal(null));
  };

  return (
    <motion.div
      initial={{ x: "200%" }}
      animate={{ x: "0" }}
      className="card-error"
    >
      <img className="icon-error" alt="" src={img} />
      <div className="texto-error">
        Hubo un error en el proceso, por favor vuelve a checkear los datos
      </div>
      <button className="boton-error" onClick={closeModal}>
        {" "}
        Volver a intentar{" "}
      </button>
    </motion.div>
  );
}

export default PagoError;

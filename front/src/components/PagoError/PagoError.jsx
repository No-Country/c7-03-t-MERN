import "./PagoError.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";
import img from "../../assets/icons/icon-pago-error.svg";

function PagoError() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModal(null));
  };

  return (
      <div className="card-error">
        <img className="icon-error" alt="" src={img} />
        <div className="texto-error">
          Hubo un error en el proceso, por favor vuelve a checkear los datos
        </div>
        <button className="boton-error" onClick={closeModal}> Volver a intentar </button>
      </div>
  );
}

export default PagoError;

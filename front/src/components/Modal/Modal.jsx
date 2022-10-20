import PagoCheck from "../PagoCheck/PagoCheck"
import PagoError from "../PagoError/PagoError"
import { useSelector } from "react-redux";

function Modal() {
    const modal = useSelector(state => state.modal)
  return (
    <div className="backdrop_modal">
       {
        modal.status === "success" ? (
            <PagoCheck text={modal.text} to={modal.to} toName={modal.toName}/>
        ) : (
            <PagoError />
        )
       }
    </div>
  );
}

export default Modal;

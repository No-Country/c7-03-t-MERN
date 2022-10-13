import "./PagoError.css";
import img from "../../assets/icons/icon-pago-error.svg";

function PagoError() {
  return (
    <div className="container-error">
      <div className="card-error">
        <img className="icon-error" alt="" src={img} />
        <div className="texto-error">
          Hubo un error en el proceso, por favor vuelve a checkear los datos
        </div>
        <button className="boton-error"> Volver a intentar </button>
      </div>
    </div>
  );
}

export default PagoError;

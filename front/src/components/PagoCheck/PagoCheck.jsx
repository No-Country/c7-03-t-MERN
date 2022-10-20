import "./PagoCheck.css";
import img from "../../assets/icons/icon-pago-check.svg";
import { Link } from "react-router-dom";

function PagoCheck() {
  return (
    <div className="container-check">
      <div className="card-check">
        <img className="icon-check" alt="" src={img} />
        <div className="texto-check">
          La cancha se reservó correctamente. Entra a tu perfil para poder ver
          todas las canchas conservadas con su respectiva fecha y horario
        </div>
        <Link to="/" className="boton-check"> Ir al inicio </Link>
      </div>
    </div>
  );
}

export default PagoCheck;

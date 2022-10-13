import "./PagoCheck.css";
import img from "../../assets/icons/icon-pago-check.svg";

function PagoCheck() {
  return (
    <div className="container-check">
      <div className="card-check">
        <img className="icon-check" alt="" src={img} />
        <div className="texto-check">
          La cancha se reservó correctamente. Entra a tu perfil para poder ver
          todas las canchas conservadas con su respectiva fecha y horario
        </div>
        <button className="boton-check"> Ir al perfil</button>
      </div>
    </div>
  );
}

export default PagoCheck;

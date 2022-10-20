import "./PagoProceso.css";
import img from "../../assets/images/pago-proceso-img.png";

function PagoProceso() {
  return (
    <div className="pago-card">
      <div className="pago-card-description">
        <img className="pago-proceso-img" alt="Imagen card" src={img} />
        <div>
          <h2 className="pago-proceso-titulo">Cancha Toledo</h2>
          <p className="reserva-textos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            volutpat libero ut pharetra rutrum. Fusce vel ligula ligula.
            Suspendisse iaculis tellus non dui porta vestibulum. Proin nisl
            erat, pharetra hendrerit enim eu.
          </p>
        </div>
      </div>
      <ul className="pago-card-list">
        <li>
          <p className="pago-data-p">Fecha y Horario</p>
          <p className="pago-fecha-texto">Sin definir</p>
        </li>
        <li>
          <p className="pago-data-p">Horas</p>
          <p className="pago-fecha-texto">Sin definir</p>
        </li>
        <li>
          <p className="pago-data-p">TOTAL (p/h)</p>
          {/* <i className="pago-horas">(Según la cantidad de horas)</i> */}
          <p className="pago-fecha-texto">Sin definir</p>
        </li>
      </ul>
    </div>
  );
}

export default PagoProceso;

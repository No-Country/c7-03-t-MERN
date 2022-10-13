import "./PagoProceso.css";
import img from "../../assets/images/pago-proceso-img.png";

function PagoProceso() {
  return (
    <div className="container-pago">
      <div className="pago-card">
        <img className="pago-proceso-img" alt="" src={img} />
        <h2 className="pago-proceso-titulo">Cancha Toledo</h2>
        <p className="reserva-textos">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          volutpat libero ut pharetra rutrum. Fusce vel ligula ligula.
          Suspendisse iaculis tellus non dui porta vestibulum. Proin nisl erat,
          pharetra hendrerit enim eu.
        </p>
        <hr className="line-1"></hr>
        <hr className="line-2"></hr>
        <hr className="line-3"></hr>
        <hr className="line-4"></hr>

        <p className="pago-fecha" texto>
          Fecha y Horario
        </p>
        <p className="pago-fecha-texto">00 diciembre 2050, 00:00</p>

        <p className="pago-hora" texto>
          Horas
        </p>
        <p className="pago-hora-texto"> 5</p>

        <p className="pago-total" texto>
          TOTAL
        </p>
        <i className="pago-horas">(Según la cantidad de horas)</i>
        <p className="pago-total-texto">$5000</p>
        <button className="pago-continuar">Continuar</button>

        {/*
          <div className="continuar-div">Continuar</div>
          */}
      </div>
    </div>
  );
}

export default PagoProceso;

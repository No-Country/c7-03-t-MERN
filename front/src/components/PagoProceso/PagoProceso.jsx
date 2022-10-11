import "./PagoProceso.css";
import img from "../../assets/images/pago-proceso-img.png";

function PagoProceso() {
  return (
    <div className="container-pago">
      <div className="pago-card">
        <img className="pago-proceso-img" alt="" src={img} />
        <h2 className="pago-proceso-titulo">Cancha Toledo</h2>

        {/*
          <p className="reserva-texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            volutpat libero ut pharetra rutrum. Fusce vel ligula ligula.
            Suspendisse iaculis tellus non dui porta vestibulum. Proin nisl
            erat, pharetra hendrerit enim eu.
          </p>
          <div className="line-div" />
          <div className="line-div1" />
          <div className="line-div2" />
          <div className="line-div3" />
          <div className="line-div4" />
          <button className="button" />
          <div className="continuar-div">Continuar</div>
          <div className="line-div" />
          <div className="line-div1" />
          <p className="total-p" texto>
            TOTAL
          </p>
          <p className="horas-p" texto>
            Horas
          </p>
          <p className="fecha-y-horario" texto>
            Fecha y Horario
          </p>
          <div className="sin-definir-div">Sin Definir</div>
          <div className="sin-definir-div1">Sin definir</div>
          <div className="sin-definir-div2">Sin definir</div>
          <i className="segn-la-cantidad-de-horas">
            (Según la cantidad de horas)
          </i> */}
      </div>
    </div>
  );
}

export default PagoProceso;

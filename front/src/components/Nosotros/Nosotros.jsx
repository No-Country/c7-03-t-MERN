import React from "react";
import "./Nosotros.css";
import img from "../../assets/images/ImagenNosotros1.png";

function Nosotros() {
  return (
    <div className="contenedor-principal-nosotros">
      <h2 className="titulo-nosotros">Sobre Nosotros</h2>
      <div className="nosotros-container">
        <div className="nosotros-item">
          <img className="img-nosotros" src={img} alt="img" />
        </div>

        <div className="nosotros-item">
          <p className="subtitulo-nosotros-2">
            SIEMPRE PENSANDO EN NUESTROS CLIENTES
          </p>
          <h2 className="subtitulo-nosotros">Buscamos facilitarte la vida</h2>
          <p className="parrafo-nosotros">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum volutpat libero ut pharetra rutrum. Fusce vel ligula
              ligula. Suspendisse iaculis tellus non dui porta vestibulum. Proin
              nisl erat, pharetra hendrerit enim eu, ultrices malesuada risus.
              Morbi eu quam nisl. Sed sem justo, tempor ac ultricies at, dapibus
              vel sapien. Phasellus rutrum volutpat ligula, ultricies condimen.
            </p>
            <p>&nbsp;</p>
            <p>
              dui porta vestibulum. Proin nisl erat, pharetra hendrerit enim eu,
              ultrices malesuada risus. Morbi eu quam nisl. Sed sem justo,
              tempor ac ultricies at, dapibus vel sapien. Phasellus rutrum
              volutpat ligula, ultricies condimen.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
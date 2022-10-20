import React from "react";
import "./Nosotros.css";
import img from "../../assets/images/ImagenNosotros1.png";

function Nosotros() {
  return (
    <div className="contenedor-principal-nosotros">
      <a name="ancla-1"></a>
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
          <div className="parrafo-nosotros">
            <p>
              Somo un equipo que se le ocurrió la brillante idea de crear una
              pagina web sobre alquiler de campos deportivos. Sabemos de primera
              mano lo tedioso que puede ser alquilar una cancha para jugar con
              amigos, por lo tanto, nuestra intención con esta aplicación web es
              ahorrarte tiempo y que puedas alquilar desde donde sea que estes,
              sin importar estar en el trabajo o la escuela.
            </p>
            <p>&nbsp;</p>
            <p>
              Todos los integrantes estamos comprometidos a brindarte los
              mejores servicios, así que cualquier duda o problema no dudes en
              hacérnoslo saber, poseemos una pagina de contactos donde puedes
              escribirnos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;

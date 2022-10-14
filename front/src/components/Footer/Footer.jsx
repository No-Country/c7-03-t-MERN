import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__p">
        Ninguna de las canchas en la pagina web corresponden a nuestra
        propiedad, las mismas son de diferentes colaboradores que optaron por
        publicitar su negocio en nuestra idea. Todos los permisos han sido
        adquiridos con éxito. ¡Vení, te esperamos!
      </p>
      <div className="footer__reserved">
        <span>C</span>
        <h5>Todos los derechos reservados</h5>
      </div>
    </footer>
  );
}

export default Footer;

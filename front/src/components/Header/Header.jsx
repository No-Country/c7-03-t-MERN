import React from "react";
import "./Header.css";
import videoFutbol from "../../assets/videos/futbolHome.mp4";
import Map from "../../assets/icons/map.svg";
import Filter from "../Filter/Filter"

const Header = () => {
  return (
    <div>
      <div className="contenedorVideo">
        <video
          src={videoFutbol}
          className="videoHome"
          autoPlay
          loop
          muted
        ></video>
        <div className="header-overlay"></div>
        {/* Esto es para hacer el video más opaco así no se pierden las letras */}
      </div>
      <div className="header__container">
        <div className="containerTextoHome">
          <div className="containerSubtitulos">
            <p className="subtitulo">
              ORGANIZAR ALGO CON TUS AMIGOS NUNCA HABÍA SIDO TAN FÁCIL
            </p>
            <h1 className="subtituloInferior">
              <span>¡ALQUILÁ</span> UNA CANCHA!
            </h1>
          </div>
          <div>
            <p className="textoHome">
              Estamos centrados en el alquiler de canchas para todas las edades.
              Ofrecemos una gran cantidad de deportes en los cuales podrás pasar
              un buen tiempo con compañeros, amigos o familiares. Poseemos
              canchas en diversos lugares, podrás buscar una cancha en el lugar
              que más se ajuste a tus necesidades.
            </p>
          </div>
          <div className="containerBotonesSubtitulos">
            <button className="comenzarBtn">Comenzar</button>
            <button className="sobreNosotrosBtn">Sobre Nosotros</button>
            {/* En los botones debería haber una redirección a esas secciones. No pude hacer andar el <Link> de react-router-dom, no sé por qué,
            pero lo voy a solucionar */}
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default Header;

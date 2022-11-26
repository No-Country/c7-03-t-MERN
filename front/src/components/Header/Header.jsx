import images from "../../assets/images";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import React from "react";
import "./Header.css";

const Header = () => {
  const token = localStorage.getItem("tokenUser");

  return (
    <section>
      <div className="contenedorVideo">
        <img src={images.Image_header} alt="header" />
        <video
          src={images.Video_header}
          className="videoHome"
          autoPlay
          loop
          muted
        ></video>
        <div className="header-overlay"></div>
      </div>
      <div className="header__container">
        <div className="containerTextoHome">
          <div className="containerSubtitulos">
            <p className="subtitulo">
              ORGANIZAR ALGO CON TUS AMIGOS NUNCA HABÍA SIDO TAN FÁCIL
            </p>
            <h1 className="subtituloInferior">
              <span>¡ALQUILÁ</span> UNA CANCHA!
              <hr />
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
            {token === null && (
              <Link to="/register" className="comenzarBtn">
                Comenzar
              </Link>
            )}
            <a href="#ancla-1">
              <button className="sobreNosotrosBtn">Sobre Nosotros</button>
            </a>
          </div>
        </div>
        <Search />
      </div>
    </section>
  );
};

export default Header;

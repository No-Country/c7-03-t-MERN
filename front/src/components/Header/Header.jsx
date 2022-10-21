import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import videoFutbol from "../../assets/videos/futbolHome.mp4";
import imagenHeader from "../../assets/images/imagenPrincipal.png";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("tokenUser");

  return (
    <section>
      <div className="contenedorVideo">
        <img src={imagenHeader} alt="header" />
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
        {/* <Navbar /> */}

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
            {token !== null ? (
              <></>
            ) : (
              <>
                <button className="comenzarBtn">
                  <Link to="/register">Comenzar</Link>
                </button>
              </>
            )}
            <a href="#ancla-1">
              <button className="sobreNosotrosBtn">Sobre Nosotros</button>
            </a>
            {/* En los botones debería haber una redirección a esas secciones. No pude hacer andar el <Link> de react-router-dom, no sé por qué,
            pero lo voy a solucionar */}
          </div>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Header;

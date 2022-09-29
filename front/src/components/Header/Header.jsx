import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import videoFutbol from "../../assets/videos/futbolHome.mp4";
import Map from "../../assets/icons/map.svg";
import Calendary from "../../assets/icons/calendary.svg";
import Basket from "../../assets/icons/basketBall.svg";
import Search from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="contenedorVideo">
          <video
            src={videoFutbol}
            className="videoHome"
            autoPlay
            loop
            muted
          ></video>
          <div className="header-overlay"></div>{/* Esto es para hacer el video más opaco así no se pierden las letras */}
        </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              architecto harum voluptas laborum dicta error et molestiae cum,
              possimus soluta mollitia, porro numquam aliquid placeat
              necessitatibus, fugiat minus explicabo facilis? Consequatur
              exercitationem, impedit a asperiores nostrum deleniti nesciunt
              recusandae aperiam labore fuga voluptatum accusamus tenetur amet
              cupiditate sed sit reprehenderit!
            </p>
          </div>
          <div className="containerBotonesSubtitulos">
            <button className="comenzarBtn">Comenzar</button>
            <button className="sobreNosotrosBtn">Sobre Nosotros</button>
            {/* En los botones debería haber una redirección a esas secciones. No pude hacer andar el <Link> de react-router-dom, no sé por qué,
            pero lo voy a solucionar */}
          </div>
        </div>
         <div className="containerBuscador">{/* BUSCAR UNA API PARA SU FUNCIONALIDAD */}
          <div>
            <img src={Map} className='map' />
            <input type="text" className="buscador" placeholder="Zona" />
          </div>
          <div>
            <input type="text" className="deporte" placeholder="Deporte" />
          </div>
          <div>
            <input
              type="date"
              className="calendario"
              placeholder="Día y fecha"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Navbar.css";
import Logo from "../../assets/icons/rugbyBall.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <div className="navbarContainer">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <div className="menuNavegacion">
          <Link to="/" className="nav"><span>Home</span></Link>
          <Link to="/preguntas" className="nav">Preguntas Frecuentes</Link>
          <Link to="/contacto" className="nav">Contacto</Link>
          </div>
          <div className="containerBtnMain">
            <div className="containerBtn">
          <Link to="/login"><button className="inicioSesion">Iniciar Sesión</button></Link>
          <Link to="/register"><button className="registrarse">Registrarse</button></Link>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;

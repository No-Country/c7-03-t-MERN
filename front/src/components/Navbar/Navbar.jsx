import { Link, useLocation } from "react-router-dom";
import images from "../../assets/images";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const token = localStorage.getItem("tokenUser");
  const location = useLocation().pathname;

  return (
    <div className="nav-main">
      <div className="navbarContainer">
        <Link to="/">
          <img src={images.Logo_icon} alt="Logo" className="logo" />
        </Link>
        {openMenu ? (
          <img
            src={images.Close}
            className="hamburgerBtn"
            alt="close"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <img
            src={images.Menu_icon}
            className="hamburgerBtn"
            alt="hamburger"
            onClick={() => setOpenMenu(true)}
          />
        )}
        <div
          className="containerBtnMain"
          style={{ left: openMenu ? "0" : "-100%" }}
        >
          <div className="menuNavegacion">
            <Link
              to="/"
              onClick={() => setOpenMenu(false)}
              className={location === "/" ? "link_activo" : "nav"}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/preguntas"
              onClick={() => setOpenMenu(false)}
              className={location === "/preguntas" ? "link_activo" : "nav"}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              to="/contacto"
              onClick={() => setOpenMenu(false)}
              className={location === "/contacto" ? "link_activo" : "nav"}
            >
              Contacto
            </Link>
          </div>
          <div className="containerBtn">
            {token !== null ? (
              <>
                <Link onClick={() => setOpenMenu(false)} to="/perfil">
                  <button className="inicioSesion">Perfil</button>
                </Link>
              </>
            ) : (
              <>
                <Link onClick={() => setOpenMenu(false)} to="/login">
                  <button className="inicioSesion">Iniciar Sesión</button>
                </Link>
                <Link onClick={() => setOpenMenu(false)} to="/register">
                  <button className="registrarse">Registrarse</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

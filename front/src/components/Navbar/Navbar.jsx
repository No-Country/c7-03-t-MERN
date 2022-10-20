import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/icons/rugbyBall.svg";
import { Link } from "react-router-dom";
import Menu from '../../assets/icons/menu.svg';
import Close from '../../assets/icons/x.svg';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav-main">
      <div className="navbarContainer">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        {openMenu ?
        <img src={Close} className='hamburgerBtn' alt="close"  onClick={() => setOpenMenu(false)} />
        :  <img src={Menu} className='hamburgerBtn' alt="hamburger" onClick={() => setOpenMenu(true)} />
      }
       

        <div className="containerBtnMain" style={{left: openMenu ? '0' : '-100%' }}>
          <div className="menuNavegacion">
            <Link to="/" onClick={() => setOpenMenu(false)} className="nav">
              <span>Home</span>
            </Link>
            <Link to="/preguntas" onClick={() => setOpenMenu(false)} className="nav">
              Preguntas Frecuentes
            </Link>
            <Link to="/contacto" onClick={() => setOpenMenu(false)} className="nav">
              Contacto
            </Link>
          </div>
          <div className="containerBtn">
            <Link onClick={() => setOpenMenu(false)} to="/login">
              <button className="inicioSesion">Iniciar Sesión</button>
            </Link>
            <Link onClick={() => setOpenMenu(false)} to="/register">
              <button className="registrarse">Registrarse</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
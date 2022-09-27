import React from "react";
import "./Navbar.css";
import Logo from "../../assets/icons/rugbyBall.svg";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="navbarContainer">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <div className="menuNavegacion">
          <Link to="/" className="nav">Home</Link>
          <Link to="/preguntas" className="nav">Preguntas Frecuentes</Link>
          <Link to="/contacto" className="nav">Contacto</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;

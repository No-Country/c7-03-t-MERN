import React from "react";
import Logo from "../../assets/icons/rugbyBall.svg";
import User from "../../assets/icons/person.svg";
import Email from "../../assets/icons/email.svg";
import EmailBold from "../../assets/icons/emailBold.svg";
import Candado from "../../assets/icons/candado.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Fondo from "../../assets/images/imagenRegister.png";
import "./Register.css";
import { BrowserRouter, Link } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <div className="containerMainRegister">
        <div className="containerCasillas">
          <div className="casillas">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="containerNombre">
              <label>
                <img src={User} />
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Usuario"
                  className="name"
                />
              </label>
            </div>
            <div className="containerCorreo">
              <label>
                <img src={EmailBold} />
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="correo@correo.com"
                  className="email"
                />
              </label>
            </div>
            <div className="containerPass">
              <label>
                <img src={Candado} />
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  placeholder="Contraseña"
                  className="pass"
                />
              </label>
            </div>
            <div className="containerConfirmPass">
              <label>
                <img src={Candado} />
                <input
                  type="password"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirmar Contraseña"
                  className="confirmPass"
                />
              </label>
            </div>
            <button type="submit" className="buttonRegister">
              Registrarse
            </button>
          </div>
        </div>
        <div className="containerFotoMain">
          <div className="containerFoto">
                <img src={Fondo} alt="Foto Fondo" className="fotoFondo" />
            <div className="containerFaceMail">
            <p className="textoAuth">También puedes continuar con:</p>
            <div className="contenedorIcons">
              <div className="circulo">
                <img
                  src={Facebook}
                  alt="Facebook Logo"
                  className="facebookLogo"
                />
              </div>
              <div className="circulo">
                <img src={Email} alt="Email Logo" className="emailLogo" />
              </div>
              </div>
              <div className="containerInicioSesion">
                <p className="parrafoInicioSesion">¿Ya tienes una cuenta?</p>
                <BrowserRouter>
                <Link to='/login'>
                <button type="submit" className="iniciarSesionBtn">
                  ¡Inicia Sesion!
                </button>
                </Link>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register; 
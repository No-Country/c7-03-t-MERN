import React from "react";
import Logo from "../../assets/icons/rugbyBall.svg";
import User from "../../assets/icons/person.svg";
import Email from "../../assets/icons/email.svg";
import EmailBold from "../../assets/icons/emailBold.svg";
import Candado from "../../assets/icons/candado.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Fondo from "../../assets/images/imagenRegister.png";
import "./Register.css";
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="register_container">
      <div className="containerMainRegister">
        <form className="containerCasillas__register">
          <div className="casillas">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="containerNombre">
              <label htmlFor='user'>
                <img src={User} alt="User_image" />
                <input
                  type="text"
                  id="Name"
                  name="user"
                  placeholder="Usuario"
                  className="name"
                />
              </label>
            </div>
            <div className="containerCorreo">
              <label htmlFor='email'>
                <img src={EmailBold} alt="Email"/>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="correo@correo.com"
                  className="email"
                />
              </label>
            </div>
            <div className="containerPass">
              <label htmlFor='password'>
                <img src={Candado} alt="Candado"/>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Contraseña"
                  className="pass"
                />
              </label>
            </div>
            <div className="containerConfirmPass">
              <label htmlFor='confirmPassword'>
                <img src={Candado} alt="Candado"/>
                <input
                  type="password"
                  id="ConfirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                  className="confirmPass"
                />
              </label>
            </div>
            <button type="submit" className="buttonRegister">
              Registrarse
            </button>
          </div>
        </form>
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
                <Link to='/login'>
                <button type="submit" className="iniciarSesionBtn">
                  ¡Inicia Sesion!
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register; 
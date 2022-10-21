import React from "react";
import Logo from "../../assets/icons/rugbyBall.svg";
import User from "../../assets/icons/person.svg";
import Email from "../../assets/icons/email.svg";
import EmailBold from "../../assets/icons/emailBold.svg";
import Candado from "../../assets/icons/candado.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Fondo from "../../assets/images/imagenRegister.png";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice.js";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function EnviarDatos(e) {
    if (e.password2 === e.password) {
      delete e.password2;
      axios
        .post("https://back-reserva.herokuapp.com/api/v1/users/signup", e)
        .then((res =>{
          localStorage.setItem("id", res.data.newUser._id);
          dispatch(
            setModal({
              status: "success",
              text: "Registro exitos, buena busqueda de canchas",
              to: "/login",
              toName: "Inicia sesion",
            }))
          }
        ))
        .catch(() => dispatch(setModal("error")));
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

  return (
    <section className="register_container">
      <div className="containerMainRegister">
        <form
          className="containerCasillas__register"
          onSubmit={handleSubmit(EnviarDatos)}
        >
          <div className="casillas">
            <img src={Logo} alt="Logo" className="logoRegister" />
            <div className="containerNombre">
              <label htmlFor="user">
                <img src={User} alt="User_image" />
                <input
                  {...register("userName")}
                  type="text"
                  placeholder="Usuario"
                  className="name"
                />
              </label>
            </div>
            <div className="containerCorreo">
              <label htmlFor="email">
                <img src={EmailBold} alt="Email" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="correo@correo.com"
                  className="email"
                />
              </label>
            </div>
            <div className="containerPass">
              <label htmlFor="password">
                <img src={Candado} alt="Candado" />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Contraseña"
                  className="pass"
                />
              </label>
            </div>
            <div className="containerConfirmPass">
              <label htmlFor="confirmPassword">
                <img src={Candado} alt="Candado" />
                <input
                  {...register("password2")}
                  type="password"
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
          </div>
          {/* <div className="containerFaceMailDesktop">
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
              <Link to="/login">
                <button type="submit" className="iniciarSesionBtn">
                  ¡Inicia Sesion!
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Register;

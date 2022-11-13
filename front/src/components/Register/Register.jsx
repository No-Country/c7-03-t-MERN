import { setModal } from "../../store/slices/modal.slice.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Register.css";
import images from '../../assets/images';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function EnviarDatos(e) {
    if (e.password2 === e.password) {
      delete e.password2;
      axios
        .post("https://back-reserva.herokuapp.com/api/v1/users/signup", e)
        .then((res) => {
          dispatch(
            setModal({
              status: "success",
              text: "Registro exitos, buena busqueda de canchas",
              to: "/login",
              toName: "Inicia sesion",
            })
          );
        })
        .catch(() => dispatch(setModal("error")));
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="containerMainRegister">
      <form
        className="containerCasillas__register"
        onSubmit={handleSubmit(EnviarDatos)}
      >
        <img src={images.Logo_icon} alt="Logo" className="logoRegister" />
        <div>
          <img src={images.Person_icon} alt="User_image" />
          <input {...register("userName")} type="text" placeholder="Usuario" />
        </div>
        <div>
          <img src={images.Correo_icon} alt="Email" />
          <input
            {...register("email")}
            type="email"
            placeholder="correo@correo.com"
          />
        </div>
        <div>
          <img src={images.Candado_icon} alt="Candado" />
          <input
            {...register("password")}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div>
          <img src={images.Candado_icon} alt="Candado" />
          <input
            {...register("password2")}
            type="password"
            placeholder="Confirmar Contraseña"
          />
        </div>
        <button type="submit" className="buttonRegister">
          Registrarse
        </button>
      </form>
      <div className="containerFotoMain">
        <div className="containerFaceMailDesktop">
          <p>También puedes continuar con:</p>
          <div className="contenedorIcons">
            <button>
              <img
                src={images.Facebook_icon}
                alt="Facebook Logo"
                className="facebookLogo"
              />
            </button>
            <button>
              <img src={images.Gmail_icon} alt="Email Logo" className="emailLogo" />
            </button>
          </div>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">¡Inicia Sesion!</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

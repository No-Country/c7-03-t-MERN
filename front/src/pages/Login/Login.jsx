import { setModal } from "../../store/slices/modal.slice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../../assets/images"
import axios from "axios";
import "./login.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function loginUser(e) {
    axios
      .post("https://back-reserva.herokuapp.com/api/v1/users/login", e)
      .then((res) => {
        localStorage.setItem("id", res.data.user._id);
        dispatch(
          setModal({
            status: "success",
            text: "Inicio de sesion exitoso, buena busqueda de canchas",
            to: "/",
            toName: "Dirigete a HOME",
          })
        );
        localStorage.setItem("tokenUser", res.data.token);
      })
      .catch(() => dispatch(setModal("error")));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login"
    >
      <div className="login-camp">
        <div className="containerFotoMain login_foto">
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
            <p>¿No tienes una cuenta?</p>
            <Link to="/register">Registrate ahora!</Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(loginUser)}
          className="containerCasillas__register"
        >
          <img src={images.Logo_icon} alt="Vecto" />
          <div>
            <img src={images.Correo_icon} alt="Correo" />
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
              placeholder="*************"
            />
          </div>
            <button className="botonAcceder">Acceder</button>
          <p>Olvide mi constraseña</p>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;

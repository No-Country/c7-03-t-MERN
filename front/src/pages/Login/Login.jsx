import "./login.css";
import vector from "../../assets/icons/rugbyBall.svg";
import gmail from "../../assets/icons/email.svg";
import facebook from "../../assets/icons/facebook.svg";
import correo_icon from "../../assets/icons/emailBold.svg";
import candado_icon from "../../assets/icons/candado.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const { register, handleSubmit } = useForm();
  function loginUser(e) {
    axios
      .post("http://back-reserva.herokuapp.com/api/v1/users/login", e)
      .then((res) => console.log(res));
    //console.log(e);
  }
  return (
    <div className="login">
      <div className="login-camp">
        <div className="imagenes">
          <div className="register">
            <p>Tambien puedes continuar con: </p>
            <br />
            <div className="image">
              <div className="circle">
                <img src={facebook} alt="" />
              </div>
              <div className="circle1">
                <img src={gmail} alt="" />
              </div>
            </div>
            <div className="under">
              <h5>¿No tienes cuenta?</h5>
              <button>¡Registrate ahora!</button>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(loginUser)} className="camps">
          <div className="ball">
            <img src={vector} alt="Vecto" />
          </div>
          <div className="container_inputs_login">
            <label htmlFor="email">
              <img src={correo_icon} alt="Correo" />
              <input
                {...register("email")}
                type="email"
                placeholder="correo@correo.com"
                className="email"
              />
            </label>
          </div>
          <div className="container_inputs_login">
            <label htmlFor="email">
              <img src={candado_icon} alt="Candado" />
              <input
                {...register("password")}
                type="password"
                placeholder="*************"
                className="email"
              />
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="Recordarme" />
            <h5>Recordarme</h5>
          </div>
          <button>Acceder</button>
          <p>Olvide mi constraseña</p>
        </form>
      </div>
    </div>
  );
}

export default Login;

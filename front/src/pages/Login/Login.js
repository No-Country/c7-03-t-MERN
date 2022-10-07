import "./login.css";
import vector from "./Prueba/Vector.png";
import vector1 from "./Prueba/vector1.png";
import imgs from "./Prueba/imgs.png";
import gmail from "./Prueba/gmail.png";
import facebook from "./Prueba/facebook.png";

function Login() {
  return (
    <div className="login">
      <div className="login-camp">
        <div className="imagenes">
          <div className="register">
            <p>Tambien puedes continuar con: </p>
            <br />
            <div className="image">
              <div>
              <div className="circle">
              <img src={facebook} alt="" />
              </div>
              </div>
              <div>
              <div className="circle1">
              <img src={gmail} alt="" />
              </div>
              </div>
            </div>
            <div className="under">
            <h5>¿No tienes cuenta?</h5>
            <button>¡Registrate ahora!</button>
            </div>
          </div>
        </div>
        <div className="camps">
          <div className="ball">
            <img src={vector} alt="" />
          </div>
          <input type="text" placeholder="             Ingrese su usuario" />
          <div className="imgs">
          <i class="fa-solid fa-user"></i>
          </div>
          <input
            type="password"
            id="pass"
            placeholder="             Ingrese su contraseña"
          />
          <div className="lock">
            <img src={imgs} alt="" />
          </div>

          <div className="checkbox">
            <input type="checkbox" name="Recordarme" />
            <h5>Recordarme</h5>
          </div>
          <button>Acceder</button>
          <p>Olvide mi constraseña</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

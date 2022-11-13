import { setModal } from "../../store/slices/modal.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import images from "../../assets/images";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contactUs.css";

function ContactUs() {
  const datosMensaje = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function EnviarMensaje(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gz2yvtg",
        "template_bjhirq5",
        datosMensaje.current,
        "YhsHRcZuEhWdweoCU"
      )
      .then(() =>
        dispatch(
          setModal({
            status: "success",
            text: "Mensaje enviado con exido, lo revisaremos lo antes posible. DEVERAS.",
            to: "/",
            toName: "Ir a home",
          })
        )
      )
      .catch(() => navigate("/error"));
  }

  return (
    <div className="contactus__container">
      <h3>¡Contactános!</h3>
      <p>Ponte en contácto con nosotros</p>
      <div className="contactus__card">
        <div className="contactus__card__div">
          <img src={images.Contact_image} alt="Contact img" />
          <ul className="contactus__card__ul">
            <li>
              <span>
                <img src={images.Message_icon} alt="Message Icon" />{" "}
              </span>
              <p>alquilerdecampos@gmail.com</p>
            </li>
            <li>
              <span>
                <img src={images.Vector_map} alt="Ubication Icon" />{" "}
              </span>
              <p>18 de julio, 123, Lima</p>
            </li>
            <li>
              <span>
                <img src={images.Telephone_icon} alt="Telephone Icon" />{" "}
              </span>
              <p>+591241278942718</p>
            </li>
          </ul>
        </div>
        <form
          className="contactus__form"
          onSubmit={EnviarMensaje}
          ref={datosMensaje}
        >
          <input
            type="text"
            placeholder="Andrés Rodriguez"
            name="name"
            required
          />
          <input
            type="text"
            placeholder="correo@gmail.com"
            name="email"
            required
          />
          <textarea
            placeholder="Escribe tu duda aquí"
            name="message"
            required
          />
          <button className="btn__form">Enviar</button>
        </form>
      </div>
      <div className="background__contactus"></div>
    </div>
  );
}

export default ContactUs;

import "./contactUs.css";
import contact_img from "../../assets/images/contact.svg";
import message_icon from "../../assets/icons/message.svg";
import map_icon from "../../assets/icons/map.svg";
import telephone_icon from "../../assets/icons/telephone.svg";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function ContactUs() {
  const datosMensaje = useRef();

  function EnviarMensaje(e) {
    console.log(datosMensaje.current);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gz2yvtg",
        "template_bjhirq5",
        datosMensaje.current,
        "YhsHRcZuEhWdweoCU"
      )
      .then(() => alert("Mensaje Enviado"));
  }

  return (
    <div className="contactus__container">
      <h3>¡Contactános!</h3>
      <p>Ponte en contácto con nosotros</p>
      <div className="contactus__card">
        <div className="contactus__card__div">
          <img src={contact_img} alt="Contact img" />
          <ul className="contactus__card__ul">
            <li>
              <span>
                <img src={message_icon} alt="Message Icon" />{" "}
              </span>
              <p>alquilerdecampos@gmail.com</p>
            </li>
            <li>
              <span>
                <img src={map_icon} alt="Ubication Icon" />{" "}
              </span>
              <p>18 de julio, 123, Lima</p>
            </li>
            <li>
              <span>
                <img src={telephone_icon} alt="Telephone Icon" />{" "}
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
          <input type="text" placeholder="Andrés Rodriguez" name="name" />
          <input type="text" placeholder="correo@gmail.com" name="email" />
          <textarea placeholder="Escribe tu duda aquí" name="message" />
          <button className="btn__form">Enviar</button>
        </form>
      </div>
      <div className="background__contactus"></div>
    </div>
  );
}

export default ContactUs;

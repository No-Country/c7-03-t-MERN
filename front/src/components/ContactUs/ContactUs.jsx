import "./contactUs.css";
import contact_img from "../../assets/images/contact.svg";
import message_icon from "../../assets/icons/message.svg";
import map_icon from "../../assets/icons/map.svg";
import telephone_icon from "../../assets/icons/telephone.svg";

function ContactUs() {
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
        <form className="contactus__form">
          <input type="text" placeholder="Andrés Rodriguez" />
          <input type="text" placeholder="correo@gmail.com" />
          <textarea placeholder="Escribe tu duda aquí" />
          <button className="btn__form">Enviar</button>
        </form>
      </div>
      <div className="background__contactus"></div>
    </div>
  );
}

export default ContactUs;

import React from "react";
import "./HeaderProfile.css";
import Banner from "../../assets/images/banner.png";
import Person from "../../assets/icons/person.svg";
import SidebarProfile from "../Sidebar/SidebarProfile";
import map from "../../assets/icons/map_orange.svg";
import alarm from "../../assets/icons/alarm.svg";
import watched from "../../assets/icons/watched.svg";
import dollar from "../../assets/icons/dollar_orange.svg";
import canchaAlquilada from '../../assets/images/canchaAlquilada.png';

const Profile = () => {
  return (
    <>
      <section className="barra_perfil">
        <img src={Banner} alt="banner" className="banner" />
      </section>
      <section className="container__perfil">
        <SidebarProfile />
        <div className="containerHistory__profile">
        <div className="history__profile">
          <h2>Canchas Alquiladas</h2>
          <div className="card__profile">
           <img className="canchaAlquiladaImg" src={canchaAlquilada} alt="canchaAlquilada" />
            <div className="card__profile__data">
              <h3>Cancha Puig</h3>
              <ul className="containerDataProfile">
                <li>
                  <img src={map} alt="Map" />
                  <span>16/12/2022</span>
                </li>
                <li>
                  <img src={watched} alt="Watched" />
                  <span>16/12/2022</span>
                </li>
                <li>
                  <img src={alarm} alt="Alarm" />
                  <span>2 horas</span>
                </li>
                <li>
                  <img src={dollar} alt="Dollar" />
                  <span>Ya pago</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card__profile">
           <img className="canchaAlquiladaImg" src={canchaAlquilada} alt="canchaAlquilada" />
            <div className="card__profile__data">
              <h3>Cancha Puig</h3>
              <ul className="containerDataProfile">
                <li>
                  <img src={map} alt="Map" />
                  <span>24/12/2022</span>
                </li>
                <li>
                  <img src={watched} alt="Watched" />
                  <span>24/12/2022</span>
                </li>
                <li>
                  <img src={alarm} alt="Alarm" />
                  <span>1 horas</span>
                </li>
                <li>
                  <img src={dollar} alt="Dollar" />
                  <span>Ya pago</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>

  );
};

export default Profile;

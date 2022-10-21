import React, { useEffect, useState } from "react";
import "./HeaderProfile.css";
import Banner from "../../assets/images/banner.png";
import Person from "../../assets/icons/person.svg";
import SidebarProfile from "../Sidebar/SidebarProfile";
import map from "../../assets/icons/map_orange.svg";
import alarm from "../../assets/icons/alarm.svg";
import watched from "../../assets/icons/watched.svg";
import dollar from "../../assets/icons/dollar_orange.svg";
import canchaAlquilada from "../../assets/images/canchaAlquilada.png";
import axios from "axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const dataHistory = useSelector((state) => state.don);
  const dataReserva = useSelector(state => state.dataReserva)
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`https://back-reserva.herokuapp.com/api/v1/users/getUser/${id}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <section className="barra_perfil">
        <img src={Banner} alt="banner" className="banner" />
      </section>
      <section className="container__perfil">
        <SidebarProfile data={data.user} book={data.bookings} />
        <div className="containerHistory__profile">
          <div className="history__profile">
            <h2>Canchas Alquiladas</h2>
            {dataHistory !== null && (
              <div className="card__profile">
                <img
                  className="canchaAlquiladaImg"
                  src={canchaAlquilada}
                  alt="canchaAlquilada"
                />
                <div className="card__profile__data">
                  <h3>{dataHistory?.fildId}</h3>
                  <ul className="containerDataProfile">
                    <li>
                      <img src={map} alt="Map" />
                      <span>{dataReserva?.date}</span>
                    </li>
                    <li>
                      <img src={watched} alt="Watched" />
                      <span>{dataReserva?.hour}</span>
                    </li>
                    <li>
                      <img src={alarm} alt="Alarm" />
                      <span>{dataReserva?.time} horas</span>
                    </li>
                    <li>
                      <img src={dollar} alt="Dollar" />
                      <span>Pendiente</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

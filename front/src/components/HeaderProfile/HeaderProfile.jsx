import SidebarProfile from "../Sidebar/SidebarProfile";
import React, { useEffect, useState } from "react";
import images from "../../assets/images";
import "./HeaderProfile.css";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`https://back-reserva.herokuapp.com/api/v1/users/getUser/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      <section className="barra_perfil">
        <img src={images.Banner} alt="banner" className="banner" />
      </section>
      <section className="container__perfil">
        <SidebarProfile data={data.user} book={data.bookings} />
        <div className="containerHistory__profile">
          <h2>Canchas Alquiladas</h2>
          <div className="history__profile">
            {data.bookings?.length !== 0 ? (
              <div className="card__profile">
                <img
                  className="canchaAlquiladaImg"
                  src={images.Canch_alquilada}
                  alt="canchaAlquilada"
                />
                <div className="card__profile__data">
                  <h3>Name</h3>
                  <ul className="containerDataProfile">
                    <li>
                      <img src={images.Map_icon_orange} alt="Map" />
                      <span>Uruguay</span>
                    </li>
                    <li>
                      <img src={images.Watched_icon} alt="Watched" />
                      <span>10/11/12</span>
                    </li>
                    <li>
                      <img src={images.Alarm_icon} alt="Alarm" />
                      <span>2 horas</span>
                    </li>
                    <li>
                      <img src={images.Dollar_orange} alt="Dollar" />
                      <span>Pendiente</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <span className="profile_message">Aun no alquilaste canchas</span>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

import images from "../../assets/images";
import "./SidebarProfile.css";
import React from "react";

const SidebarProfile = ({ data, book }) => {
  return (
    <div className="sidebaProfile">
      <img
        src={images.Profile_user_icon}
        alt="fotoPerfil"
        className="profilePic"
      />
      <h2 className="user">{data?.userName}</h2>
      <div className="containerData">
        <div>
          <img src={images.Gmail_icon_2} alt="gmail" />
          <p>{data?.email}</p>
        </div>
        <div>
          <img src={images.Cancha_icon} alt="courts" />
          <p>{book?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;

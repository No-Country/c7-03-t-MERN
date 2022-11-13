import { useLocation, useNavigate } from "react-router-dom";
import images from "../../assets/images";
import React from "react";
import "./Search.css";

const Search = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const changePageSearch = () => {
    if (location !== "/search") {
      navigate("/search");
    }
  };
  return (
    <div className="containerBuscador" onClick={changePageSearch}>
      <ul>
        <li>
          <img src={images.Map_icon_orange} alt="Map" />
          <input type="text" />
        </li>
        <li>
          <img src={images.Basketball_icon_orange} alt="Basket" />
          <input type="text" />
        </li>
        <li>
          <img src={images.Calendary_icon_orange} alt="" />
          <input type="text" />
        </li>
      </ul>
      <button>
        <img src={images.Search_icon} alt="search" />
      </button>
    </div>
  );
};

export default Search;

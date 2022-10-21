import React from "react";
import Map from '../../assets/icons/map.svg';
import BasketBall from '../../assets/icons/basketBall.svg';
import SearchIcon from '../../assets/icons/search.svg';
import './Search.css';
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate()

  const changePageSearch = () => {
    if(location !== "/search"){
      navigate("/search")
    }
  }
  return (
    <section>
      <div className="containerBuscador" onClick={changePageSearch}>
          {/* BUSCAR UNA API PARA SU FUNCIONALIDAD */}
          <div>
             <img src={Map} className="map" alt="Map"/>
            <input type="text" className="buscador" placeholder="______" />
          </div>
          <div>
            <img src={BasketBall} className='basket' alt="Basket" />
            <input type="text" className="deporte" placeholder="______" />
          </div>
          <div>
            <input
              type="date"
              className="calendario"
              placeholder="______"
            />
            <img src={SearchIcon} alt="search" className="search" />
          </div>
        </div>
    </section>
  )
}

export default Search








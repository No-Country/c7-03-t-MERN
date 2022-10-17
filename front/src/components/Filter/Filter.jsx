import './filter.css'
import search_icon from "../../assets/icons/search.svg"
import map_icon from "../../assets/icons/map_orange.svg"
import ball_icon from "../../assets/icons/basketBall_orange.svg"
import calendary_icon from "../../assets/icons/calendary.svg"

function Filter(){
    return(
        <div className='filter'>
            <div className="container__filter__inputs">
                <label>
                    <img src={map_icon} alt="Map Icon" />
                    <input type="text" />
                </label>
                <label>
                    <img src={ball_icon} alt="Ball icon" />
                    <input type="text" />
                </label>
                <label>
                    <img src={calendary_icon} alt="Calendary Icon" />
                    <input type="date" />
                </label>
            </div>
            <button>
                <img src={search_icon} alt="Search icon" />
            </button>
        </div>
    )
}

export default Filter
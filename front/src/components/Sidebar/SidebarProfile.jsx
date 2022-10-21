import React from 'react'
import './SidebarProfile.css';
import ProfilePic from '../../assets/images/profilePic.png';
import Born from '../../assets/icons/born.svg';
import Cancha from '../../assets/icons/canchaBold.svg';
import Futbol from '../../assets/icons/futbolBall.svg';
import Gmail from '../../assets/icons/gmail.svg';

const SidebarProfile = ({data, book}) => {
    return (
        <div className='aaa'>
            <div className='containerProfilePic'>
                <img src={ProfilePic} alt="fotoPerfil" className='profilePic' />
            </div>
            <div className='containerData'>
                <h2 className='user'>{data?.userName}</h2>
                {/* <div className='born'>
                    <img src={Born} alt="born" />
                    <p>6/6/1998</p>
                </div> */}
                <div className='gmail'>
                    <img src={Gmail} alt="gmail" />
                    <p>{data?.email}</p>
                </div>
                {/* <div className='sport'>
                    <img src={Futbol} alt="sport" />
                    <p>Fútbol</p>
                </div> */}
                <div className='courts'>
                    <img src={Cancha} alt="courts" />
                    <p>{book?.length}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarProfile
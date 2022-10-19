import React from 'react';
import './HeaderProfile.css';
import Banner from '../../assets/images/banner.png';
import Person from '../../assets/icons/person.svg';
import SidebarProfile from '../Sidebar/SidebarProfile';

const Profile = () => {
    return (
        <>
            {/* <Navbar /> */}
            <section>
                <div className='containerBanner'>
                    <img src={Banner} alt="banner" className='banner' />
                </div>
                <div className='containerBtn'>
                    <button className='perfilBtn'><img src={Person} alt="person" className='profileIcon' /> Mi Perfil</button>
                </div>
            </section>
            <section>
                <SidebarProfile />
            </section>
        </>
    )
}

export default Profile
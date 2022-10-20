import React from 'react';
import ErrorImg from '../../assets/icons/error.svg';
import './Error.css';

const Error = () => {
  return (
    // Agregar los componentes navbar y header
    <section className='section__error'>
      <div className='containerError'>
        <img src={ErrorImg} alt='rrror' className='imgError' />
      </div>
      <div className='containerTitle'>
        <h1>¡Ups! No pudimos encontrar la página, vuelve a intentarlo! :)</h1>
      </div>
    </section>
    // Agregar el componente footer
  )
}

export default Error

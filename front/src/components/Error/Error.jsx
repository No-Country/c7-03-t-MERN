import React from 'react';
import ErrorImg from '../../assets/icons/error.svg';
import './Error.css';

const Error = () => {
  return (
    // Agregar los componentes navbar y header
    <section>
      <div className='containerError'>
        <img src={ErrorImg} alt='Error image' className='imgError' />
      </div>
      <div className='containerTitle'>
        <h1>¡Ups! No pudimos encontrar la página! Vuelve a intentarlo :)!</h1>
      </div>
    </section>
    // Agregar el componente footer
  )
}

export default Error
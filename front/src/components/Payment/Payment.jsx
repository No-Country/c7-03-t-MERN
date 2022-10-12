import React, { useState } from 'react';
import './Payment.css';
import Visa from '../../assets/icons/visa.svg';
import AmericanCard from '../../assets/icons/americanExpress.svg';
import masterCard from '../../assets/icons/masterCard.svg';

const Payment = () => {
  return (
    <section>
      <div className='mainContainer'>
        <form action="/payment" method="POST">
          <p className='subtitle'>MÉTODO DE PAGO</p>
          <div className='containerCasillas'>
            <label className='labelCard'><input type="radio" />Crédito / Débito
              <div className='cards'>
                <img src={Visa} alt="visa" />
                <img src={AmericanCard} alt="american" />
                <img src={masterCard} alt="master" />
              </div>
            </label>
            <label className='labelEf'><input type="radio" />Efectivo <span>(Pagar en puerta)</span></label>
          </div>
          <div>
            <p className='subtitleDatos'>Rellenar datos: </p>
            <div className='casillasDatos'>
              <input type="text" placeholder='Número de la tarjeta de débito' />
              <input type="text" placeholder='Fecha de expiración' />
              <input type="text" placeholder='CVN' />
            </div>
          </div>  
        </form>
      </div>
    </section>
  )
}

export default Payment
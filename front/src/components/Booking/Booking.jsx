import React from 'react';
import './Booking.css';
import Hour from '../../assets/icons/hour.svg';
import Clock from '../../assets/icons/clock.svg';
import Day from '../../assets/icons/day.svg';

const Booking = () => {
  return (
    <div className="mainContainer">
        <form action="/booking" method="POST">
            <div className="containerCasillas">
                <label><img src={Day} alt="date" className='dayIcon' />Fecha de reserva<input type="date" className="booking" /></label>
                <label><img src={Hour} alt="hour" className='hourIcon' />Horario<input type="time" className="hour" /></label>
                <label><img src={Clock} alt="time" className='clockIcon' />Cantidad de horas<input type="time" className="time" /></label>
            </div>
              <button type='submit' className='bookingBtn'>Continuar</button> {/* una vez se toca el botón, llamar al componente: "Payment" */}
        </form>
    </div>
  )
}


export default Booking
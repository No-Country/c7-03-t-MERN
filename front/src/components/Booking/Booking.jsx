import React from "react";
import "./Booking.css";
import Hour from "../../assets/icons/hour.svg";
import Clock from "../../assets/icons/clock.svg";
import Day from "../../assets/icons/day.svg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {setDataReserva} from "../../store/slices/reserva.slice"

const Booking = ({ changeNextStep }) => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(setDataReserva(data))
    changeNextStep(true);
  };

  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit(submit)}>
        <div className="containerCasillas">
          <label>
            <img src={Day} alt="date" className="dayIcon" />
            Fecha de reserva
            <input
              type="date"
              id="date"
              className="booking"
              required
              {...register("date", { required: true })}
              hasError={!!formState.errors?.date}
            />
          </label>
          <label>
            <img src={Hour} alt="hour" className="hourIcon" />
            Horario
            <input
              type="time"
              id="hour"
              className="hour"
              required
              {...register("hour", { required: true })}
              hasError={!!formState.errors?.hour}
            />
          </label>
          <label>
            <img src={Clock} alt="time" className="clockIcon" />
            Cantidad de horas
            <input
              type="number"
              min={0}
              max={23}
              className="time"
              id="time"
              required
              {...register("time", { required: true })}
              hasError={!!formState.errors?.time}
            />
          </label>
        </div>
        <button type="submit" className="bookingBtn">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Booking;

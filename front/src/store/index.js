import { configureStore } from "@reduxjs/toolkit";
import chanchaModal from "./slices/cancha.slice";
import modal from "./slices/modal.slice"
import dataReserva from "./slices/reserva.slice"
import canchaReserva from "./slices/canchaReserva.slice"
import don from "./slices/reservada.slice"


export default configureStore({
  reducer: {
    chanchaModal,
    modal,
    dataReserva,
    canchaReserva,
    don
  },
});

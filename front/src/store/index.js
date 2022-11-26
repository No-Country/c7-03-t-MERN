import { configureStore } from "@reduxjs/toolkit";
import chanchaModal from "./slices/cancha.slice";
import dataReserva from "./slices/reserva.slice";
import modal from "./slices/modal.slice";

export default configureStore({
  reducer: {
    chanchaModal,
    modal,
    dataReserva,
  },
});

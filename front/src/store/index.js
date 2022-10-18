import { configureStore } from "@reduxjs/toolkit";
import chanchaModal from "./slices/cancha.slice";

export default configureStore({
  reducer: {
    chanchaModal,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import chanchaModal from "./slices/cancha.slice";
import modal from "./slices/modal.slice"

export default configureStore({
  reducer: {
    chanchaModal,
    modal
  },
});

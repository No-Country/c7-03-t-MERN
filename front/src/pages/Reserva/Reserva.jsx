import { PasosReserva, Booking, PagoProceso, Payment } from "../../components";
import { motion } from "framer-motion";
import "./reserva.css";
import { useState } from "react";

function Reserva() {
  const [nextStep, setNextStep] = useState(false);

  window.scroll({
    top: 1,
    behavior: "smooth",
  });

  const changeNextStep = (e) => {
    setNextStep(e);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="reserva"
    >
      <div className="reserva__form">
        <PasosReserva nextStep={nextStep}/>
        {nextStep ? <Payment /> : <Booking changeNextStep={changeNextStep} />}
      </div>
      <PagoProceso />
    </motion.div>
  );
}

export default Reserva;

import { PasosReserva, Booking, PagoProceso, Payment } from "../../components";
import { motion } from "framer-motion";
import "./reserva.css";
import { useState } from "react";

function Reserva() {
  const [nextStep, setNextStep] = useState(false);
  const [btn, setBtn] = useState(false);

  window.scroll({
    top: 1,
    behavior: "smooth",
  });

  const showBtn = (e) => {
    setBtn(e)
  }

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
        {nextStep ? <Payment showBtn={showBtn}/> : <Booking changeNextStep={changeNextStep} />}
      </div>
      <PagoProceso btn={btn}/>
    </motion.div>
  );
}

export default Reserva;

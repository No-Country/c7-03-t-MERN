import React, { useEffect, useState } from "react";
import InputCard from "../inputCards/InputCards";
import images from "../../assets/images";
import "./Payment.css";

const Payment = ({ showBtn }) => {
  const [cardPayment, setCardPayment] = useState(false);

  useEffect(() => {
    if (cardPayment === "no") {
      showBtn(true);
    } else {
      showBtn(false);
    }
  }, [cardPayment]);

  return (
    <div className="mainContainer_payment">
      <p className="subtitle">MÉTODO DE PAGO</p>
      <form>
        <label className="labelCard">
          <input
            type="radio"
            name="cardPayment"
            onChange={(e) => setCardPayment(e.target.value)}
            value="si"
          />
          Crédito / Débito
          <div className="cards">
            <img src={images.Visa_icon} alt="visa" />
            <img src={images.American_card_icon} alt="american" />
            <img src={images.Master_card_icon} alt="master" />
          </div>
        </label>
        <label className="labelEf">
          <input
            type="radio"
            name="cardPayment"
            onChange={(e) => setCardPayment(e.target.value)}
            value="no"
          />
          Efectivo <span>(Pagar en puerta)</span>
        </label>
      </form>
      {cardPayment === "si" && <InputCard showBtn={showBtn} />}
    </div>
  );
};

export default Payment;

import React, { useEffect, useState } from "react";
import "./Payment.css";
import Visa from "../../assets/icons/visa.svg";
import AmericanCard from "../../assets/icons/americanExpress.svg";
import masterCard from "../../assets/icons/masterCard.svg";
import InputCard from "../inputCards/InputCards";

const Payment = ({showBtn}) => {
  const [cardPayment, setCardPayment] = useState(false);

  useEffect(() => {
    if(cardPayment === "no"){
      showBtn(true)
    }else{
      showBtn(false)
    }
  }, [cardPayment])
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
            <img src={Visa} alt="visa" />
            <img src={AmericanCard} alt="american" />
            <img src={masterCard} alt="master" />
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

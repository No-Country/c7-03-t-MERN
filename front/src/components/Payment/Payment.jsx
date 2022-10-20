import React from "react";
import "./Payment.css";
import Visa from "../../assets/icons/visa.svg";
import AmericanCard from "../../assets/icons/americanExpress.svg";
import masterCard from "../../assets/icons/masterCard.svg";
import InputCard from "../inputCards/InputCards"

const Payment = () => {
  return (
    <div className="mainContainer_payment">
      <p className="subtitle">MÉTODO DE PAGO</p>
      <form action="/payment" method="POST">
        <label className="labelCard">
          <input type="radio" />
          Crédito / Débito
          <div className="cards">
            <img src={Visa} alt="visa" />
            <img src={AmericanCard} alt="american" />
            <img src={masterCard} alt="master" />
          </div>
        </label>
        <label className="labelEf">
          <input type="radio" />
          Efectivo <span>(Pagar en puerta)</span>
        </label>
      </form>
      <InputCard />
    </div>
  );
};

export default Payment;

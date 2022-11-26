import images from "../../assets/images";
import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <section className="section__error">
      <div className="containerError">
        <img src={images.Error_img} alt="rrror" className="imgError" />
      </div>
      <div className="containerTitle">
        <h1>¡Ups! No pudimos encontrar la página, vuelve a intentarlo! :)</h1>
      </div>
    </section>
  );
};

export default Error;

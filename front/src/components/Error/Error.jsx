import React from "react";
import ErrorImg from "../../assets/icons/error.svg";
import "./Error.css";

const Error = () => {
  return (
    // Agregar los componentes navbar y header
    <section className="section_error">
      <div className="containerError">
        <img src={ErrorImg} className="imgError" alt="Error_image" />
      </div>
      <div className="containerTitle">
        <h1>¡Ups! No pudimos encontrar la página :(</h1>
      </div>
    </section>
    // Agregar el componente footer
  );
};

export default Error;

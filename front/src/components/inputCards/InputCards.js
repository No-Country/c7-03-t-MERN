import { useForm } from "react-hook-form";
import "./inputCards.css";

function InputCards() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="contenedor-inputs-main">
      <div className="card-inputs">
        <h3 className ="title-inputs" >Rellenar datos</h3>
        <form onSubmit={handleSubmit(submit)}>
          <input
            {...register("cardNumber")}
            type="number"
            placeholder="Numero de la tarjeta de credito"
            className="cardNumber"/>
          <input
            {...register("dateExpire")}
            type="month"
            placeholder="Fecha de Expiracion mm/yy"
            className="dateExpire"/>

          <input {...register("cuv")}
           type="number" 
           placeholder="CUV" 
           className="cuv"/>

          <button >Enviar Form</button>
        </form>
      </div>
    </div>
  );
}

export default InputCards;

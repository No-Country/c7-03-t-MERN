import { useForm } from "react-hook-form";
import "./inputCards.css";

function InputCards() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p className="title-inputs">Rellenar datos:</p>
      <div>
        <form className="dataBox" onSubmit={handleSubmit(submit)}>
          <input 
            {...register("cardNumber")}
            type="number"
            placeholder="Numero de la tarjeta de credito"
          />
          <input
            {...register("dateExpire")}
            type="text"
            placeholder="Fecha de Expiracion MM/YY"
          />
          <input
            {...register("cvn")}
            type="number"
            placeholder="CVN"
          />
  
        </form>
      </div>
    </div>
  );
}

export default InputCards;

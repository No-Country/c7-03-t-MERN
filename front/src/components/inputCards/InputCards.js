import { useForm } from "react-hook-form";
import "./inputCards.css";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

function InputCards({showBtn}) {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    showBtn(true)
    console.log(data);
  };

  return (
    <motion.div initial={{y: "-50px", opacity: 0}} animate={{y: "0px", opacity: 1}}>
      <p className="title-inputs">Rellenar datos:</p>
      <div>
        <form className="dataBox" onSubmit={handleSubmit(submit)}>
          <input 
            {...register("cardNumber")}
            type="number"
            placeholder="Numero de la tarjeta de credito"
            minLength="16"
            maxLength="16"
            required
          />
          <input
            {...register("dateExpire")}
            type="text"
            placeholder="Fecha de Expiracion MM/YY"
            minLength="5"
            maxLength="5"
            required
          />
          <input
            {...register("cvn")}
            type="number"
            placeholder="CVN"
            minLength="3"
            maxLength="3"
            required
          />
          <div className="containerVerificarBtn">
          <button className="verificarBtn">Verificar</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default InputCards;

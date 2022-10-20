import {
  CardCancha,
  Description,
  Header,
  Nosotros,
  Click,
} from "../../components";
import data from "../../utils/canchas.json";
import React, { useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios.get("https://reserva-back.herokuapp.com/api/v1/fild/findAll").then((res) => console.log(res.data))
  })
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Home"
      >
        <Header />
        <Description />
        <Nosotros />
        <div className="canchas__container">
          <h2 className="canchas__title">Canchas destacadas</h2>
          <div className="canchas__list">
            {data.canchas.map((e) => (
              <CardCancha key={e.id} data={e} />
            ))}
          </div>
        </div>
        <Click />
      </motion.div>
  );
}

export default Home;

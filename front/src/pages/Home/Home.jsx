import {
  CardCancha,
  Description,
  Header,
  Nosotros,
  Click,
} from "../../components";
import data from "../../utils/canchas.json";
import React from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home() {
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
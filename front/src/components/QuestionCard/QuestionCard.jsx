import React, { useState } from "react";
import "./questionCard.css";
import masVector from "../../assets/icons/mas_vector.png";
import { motion, AnimatePresence } from "framer-motion";

function QuestionCard({ question }) {
  const [openCard, setOpenCard] = useState(false);
  return (
    <>
      <div className="question__card" onClick={() => setOpenCard(!openCard)}>
        <img src={masVector} alt="Mas" />
        <h3 className="question__card__title">{question.question}</h3>
      </div>
      <AnimatePresence>
        {openCard && (
          <motion.div
            initial={{y: "-100%"}}
            animate={{y: "0"}}
            exit={{y: "-100%"}}
            className="question__card__res"
          >
            <p>{question.res}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuestionCard;

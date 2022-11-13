import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import images from "../../assets/images";
import "./questionCard.css";

function QuestionCard({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      className="question__card__container"
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <motion.div layout className="question__card">
        <img src={images.Mas_icon} alt="Mas" />
        <h3 className="question__card__title">{question.question}</h3>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="question__card__res"
          >
            {question.res}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default QuestionCard;

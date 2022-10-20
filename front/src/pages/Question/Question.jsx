import React from "react";
import "./question.css";
import { QuestionCard } from "../../components";
import questions from "../../utils/question.json";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function Question() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="question__container"
    >
      <div className="question__background"></div>
      <div className="question__first__card">
        <h2 className="question__title">¿Como podemos ayudarte?</h2>
        <p className="question__p">
          A continuacion podras ver una lista con las preguntas mas frecuentes.
          Solo pincha en la que se te adapte a tu duda para desplegar mas
          informacion.
        </p>
        <AnimateSharedLayout>
          <motion.ul
            layout
            initial={{ borderRadius: 25 }}
            className="question__list"
          >
            {questions.questions.map((question) => (
              <QuestionCard question={question} key={question.id} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}

export default Question;

import React from "react";
import "./question.css";
import { Footer, Navbar, QuestionCard } from "../../components";
import questions from '../../utils/question.json';

function Question() {
  return (
    <>
      <Navbar />
      <div className="question__container">
        <div className="question__first__card">
          <h2 className="question__title">¿Como podemos ayudarte?</h2>
          <p className="question__p">
            A continuacion podras ver una lista con las preguntas mas
            frecuentes. Solo pincha en la que se te adapte a tu duda para
            desplegar mas informacion.
          </p>
          <div className="question__list">
            {
                questions.questions.map(question => (
                    <QuestionCard question={question.question} key={question.id}/>
                ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Question;

import React from "react";
import './questionCard.css'
import masVector from '../../assets/icons/mas_vector.png'

function QuestionCard({question}) {
    return (
        <div className="question__card">
            <img src={masVector} alt="Mas" />
            <h3 className="question__card__title">
                {question}
            </h3>
        </div>
    )
}

export default QuestionCard
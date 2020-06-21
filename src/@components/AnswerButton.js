import React from 'react';
import { Button } from 'reactstrap';

export default function AnswerButton({ onClick, isCorrectAnswer, answerSubmitted, encodedText, selectedAnswer }) {
  let color = "light";
  if (selectedAnswer === encodedText) {
    color = isCorrectAnswer ? "secondary" : "dark";
  }
  return <Button disabled={answerSubmitted} color={color} onClick={onClick} className={`btn btn-sm btn-block border border-dark`}>{decodeURIComponent(encodedText)}</Button>;
}

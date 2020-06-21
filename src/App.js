import React from 'react';
import './App.css';
import {
  Progress,
  Row,
  Col,
  Button,
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import AnswerButton from './@components/AnswerButton';
import ColFlexCenter from './@components/ColFlexCenter';
import { Questions } from "./questions";

const totalQuestions = Questions.length;
const difficulties = {
  "easy": 1,
  "medium": 2,
  "hard": 3,
};

function App() {
  const [currentQuestIndex, setCurrentQuestIndex] = React.useState(0);
  const [countOfCorrectAnswers, setCountOfCorrectAnswers] = React.useState(0);
  const [countOfAnsweredQuestions, setCountOfAnsweredQuestions] = React.useState(0);
  const [answerSubmitted, setAnswerSubmitted] = React.useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  const currentQuestNum = currentQuestIndex + 1;
  const question = Questions[currentQuestIndex];
  const difficulty = difficulties[question.difficulty];
  const allAnswers = [question.correct_answer, ...question.incorrect_answers].sort();

  const minScore = countOfCorrectAnswers / countOfAnsweredQuestions;
  const actualScore = countOfCorrectAnswers / totalQuestions;
  const maxScore = (countOfCorrectAnswers + totalQuestions - countOfAnsweredQuestions) / totalQuestions;

  function onClickNextQuestion() {
    setCurrentQuestIndex(currentQuestIndex + 1);
    setSelectedAnswer('');
    setAnswerSubmitted(false);
  }

  function onClickAnswer(userAnswer) {
    const isCorrect = question.correct_answer.includes(userAnswer);
    if (isCorrect) {
      setCountOfCorrectAnswers(countOfCorrectAnswers + 1);
    }
    setIsCorrectAnswer(isCorrect);
    setAnswerSubmitted(true);
    setSelectedAnswer(userAnswer);
    setCountOfAnsweredQuestions(countOfAnsweredQuestions + 1);
  }

  function renderAnswers() {
    return question.type === "multiple" ? (<>
      <Row className='m-3'>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[0])} encodedText={allAnswers[0]} />
        </ColFlexCenter>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[1])} encodedText={allAnswers[1]} />
        </ColFlexCenter>
      </Row>
      <Row className='m-3'>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[2])} encodedText={allAnswers[2]} />
        </ColFlexCenter>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[3])} encodedText={allAnswers[3]} />
        </ColFlexCenter>
      </Row>
    </>) : (<>
      <Row className='m-3'>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[0])} encodedText={allAnswers[0]} />
        </ColFlexCenter>
        <ColFlexCenter>
          <AnswerButton selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer} answerSubmitted={answerSubmitted} onClick={onClickAnswer.bind(null, allAnswers[1])} encodedText={allAnswers[1]} />
        </ColFlexCenter>
      </Row>
    </>);
  }

  return (
    <Row className="justify-content-md-center m-0 hv-100">
      <Col md={8} className="app-border d-flex flex-column">
        <Row>
          <Col className="px-0">
            <Progress multi className="bg-progress-white">
              <Progress bar color="secondary" value={currentQuestNum} max={totalQuestions} />
            </Progress>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1>Question {currentQuestNum} of {totalQuestions}</h1>

            <p>{decodeURIComponent(question.category)}</p>

            <StarRatingComponent
              name="StarRatingComponent1"
              starCount={5}
              value={difficulty}
              editing={false}
              starColor="#000000"
              emptyStarColor="#CBCCCBFF"
            />

            <br />
            <br />

            <h5>{decodeURIComponent(question.question)}</h5>

            <br />

            {renderAnswers()}

            {answerSubmitted && <>
              <Row>
                <ColFlexCenter>
                  <h4>{isCorrectAnswer ? "Correct!" : "Sorry!"}</h4>
                </ColFlexCenter>
              </Row>
              {currentQuestNum < totalQuestions && <Row>
                <ColFlexCenter>
                  <Button color="light" className='border border-dark' onClick={onClickNextQuestion}>Next Question</Button>
                </ColFlexCenter>
              </Row>}
            </>}

          </Col>
        </Row>

        {/* mt-auto is placing it at the bottom */}
        <Row className="mt-auto justify-content-center">
          <Col md={8}>
            <Row>
              <Col className="text-left">
                <strong>
                  Score: {(actualScore * 100).toFixed(0)}%
                </strong>
              </Col>
              <Col className="text-right">
                <strong>
                  Max Score: {(maxScore * 100).toFixed(0)}%
                </strong>
              </Col>
            </Row>
            <Progress multi className="bg-progress-white border border-dark">
              <Progress bar className="bg-progress-bar-dark" value={minScore} max={1} />
              <Progress bar className="bg-progress-bar-normal" value={actualScore} max={1} />
              <Progress bar className="bg-progress-bar-light" value={maxScore} max={1} />
            </Progress>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;

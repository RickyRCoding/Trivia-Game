"use client";

import React, { useState, useEffect } from "react";
import possibleQuestions from "../questions.js";
import End from "../components/end.jsx";

// Fisher-Yates shuffle algorithm function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionnum, setQuestionnum] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  if (end) {
    return <End score={score} />;
  }

  useEffect(() => {
    let setquestions = possibleQuestions;

    while (setquestions.length <= 20) {
      setquestions = setquestions.concat(possibleQuestions);
    }
    setquestions.length = 20;

    setquestions = shuffleArray(setquestions);
    setquestions.unshift(undefined);
    console.log(setquestions);

    setQuestions(setquestions);
  }, []);

  useEffect(() => {
    if (questions.length > 0 && questions[questionnum]) {
      let setanswers = questions[questionnum].incorrect_answers.slice();
      setanswers.push(questions[questionnum].correct_answer);
      setanswers = shuffleArray(setanswers);
      setAnswers(setanswers);
    }
  }, [questions, questionnum]);

  console.log(questions);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="parent-element">
        <p className="red">{questionnum}/20</p>
        <p className="yellow score">Score: {score}</p>
      </div>
      <h2 className="green category">
        Category: {questions[questionnum].category}
      </h2>
      <h1 className="question">{questions[questionnum].question}</h1>
      <div className="possible-answers">
        <button
          className={`possible-answer ${
            correct === undefined && clicked === 0
              ? "clicked"
              : correct && correct[0] === 0
              ? "correct unclickable"
              : correct && correct[1] === 0
              ? "wrong unclickable"
              : correct !== undefined
              ? "nothing unclickable"
              : null
          }`}
          onClick={() => setClicked(0)}
        >
          {answers[0]}
        </button>
        <button
          className={`possible-answer ${
            correct === undefined && clicked === 1
              ? "clicked"
              : correct && correct[0] === 1
              ? "correct unclickable"
              : correct && correct[1] === 1
              ? "wrong unclickable"
              : correct !== undefined
              ? "nothing unclickable"
              : null
          }`}
          onClick={() => setClicked(1)}
        >
          {answers[1]}
        </button>
        <button
          className={`possible-answer ${
            correct === undefined && clicked === 2
              ? "clicked"
              : correct && correct[0] === 2
              ? "correct unclickable"
              : correct && correct[1] === 2
              ? "wrong unclickable"
              : correct !== undefined
              ? "nothing unclickable"
              : null
          }`}
          onClick={() => setClicked(2)}
        >
          {answers[2]}
        </button>
        <button
          className={`possible-answer ${
            correct === undefined && clicked === 3
              ? "clicked"
              : correct && correct[0] === 3
              ? "correct unclickable"
              : correct && correct[1] === 3
              ? "wrong unclickable"
              : correct !== undefined
              ? "nothing unclickable"
              : null
          }`}
          onClick={() => setClicked(3)}
        >
          {answers[3]}
        </button>
      </div>
      <button
        className="validate"
        onClick={() => {
          // if (clicked + 1 && clicked !== false) {

          if (clicked + 1) {
            if (answers[clicked] === questions[questionnum].correct_answer) {
              setCorrect([clicked, undefined]);
              setClicked(false);
              setScore(score + 1);
            } else {
              setClicked(false);
              setCorrect([
                answers.indexOf(questions[questionnum].correct_answer),
                clicked,
              ]);
            }
          }
          if (correct !== undefined) {
            if (questionnum === 20) {
              setEnd(true);
            } else if (questionnum < 20) {
              setQuestionnum(questionnum + 1);
            }
            setCorrect();
          }
        }}
      >
        {correct !== undefined
          ? questionnum === 20
            ? "Let's check the stats"
            : "Next Question"
          : "Validate"}
      </button>
    </>
  );
};

export default QuizPage;

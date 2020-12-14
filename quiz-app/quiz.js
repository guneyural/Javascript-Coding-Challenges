import React, { useState, useEffect } from "react";
import Modal from "./modal";
import ReactMarkdown from "react-markdown";

const Quiz = (props) => {
  const { questions, setIsStart } = props;
  const [index, setIndex] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [trueCount, setTrueCount] = useState(0);
  const [current, setCurrent] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (index > questions.length - 1) {
      setIndex(questions.length - 1);
      setOptions([]);
      setIsModal(true);
    } else {
      setCurrent(questions[index]);

      let range = questions[index].type === "multiple" ? 4 : 2;
      let rand = Math.floor(Math.random() * range);
      let temp = questions[index].incorrect_answers;
      temp.splice(rand, 0, questions[index].correct_answer);
      setOptions(temp);
    }
  }, [index]);

  const answer = (e) => {
    if (e.target.value === questions[index].correct_answer) {
      setTrueCount(trueCount + 1);
    }
    setIndex(index + 1);
  };

  return (
    <>
      {isModal ? (
        <Modal
          trueCount={trueCount}
          setIsStart={setIsStart}
          questionLength={questions.length}
        />
      ) : (
        <div className="setup-card">
          <p className="correct-answers">
            Correct Answers: {trueCount} of {questions.length}
          </p>
          <ReactMarkdown className="question-text">
            {current.question}
          </ReactMarkdown>
          {options.map((option, index) => {
            return (
              <button
                className="option"
                key={index}
                value={option}
                onClick={(e) => answer(e)}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Quiz;

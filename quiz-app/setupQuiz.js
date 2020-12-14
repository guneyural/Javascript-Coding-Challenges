import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "./assets/loading.gif";
import Quiz from "./quiz";

const SetupQuiz = () => {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState(21);
  const [isStart, setIsStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const BASE_URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}`;

  useEffect(() => {
    if (amount > 50) {
      setAmount(50);
    } else if (amount < 1) {
      setAmount(1);
    }
  }, [amount]);

  const startQuiz = () => {
    setIsLoading(true);
    Axios.get(BASE_URL)
      .then((resp) => resp.data.results)
      .then((data) => {
        if (data.length < 1) {
          setIsStart(false);
          setIsLoading(false);
          setIsError(true);
        } else {
          setQuestions(data);
          setIsLoading(false);
          setIsError(false);
          setIsStart(true);
        }
      })
      .catch((err) => {
        setIsError(true);
        setIsStart(false);
      });
  };

  if (isLoading) {
    return (
      <>
        <img src={Loading} alt="Loading spinner is spinning." />
      </>
    );
  }

  if (!isStart) {
    return (
      <div className="container">
        <div className="setup-card">
          <h1 style={{ fontWeight: "bold" }}>Setup Quiz</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <section className="form-section">
              <label htmlFor="amount">Number Of Questions</label>
              <br />
              <input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                max="50"
                min="1"
              />
            </section>
            <section className="form-section">
              <label htmlFor="category">Select Category</label>
              <br />
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="21">Sport</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
              </select>
            </section>
            <section className="form-section">
              <label htmlFor="difficulty">Select Difficulty</label>
              <br />
              <select
                name="difficulty"
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
              </select>
            </section>
            <section className="form-section">
              <button className="start-btn" onClick={() => startQuiz()}>
                Start Quiz
              </button>
              {isError && <p className="error-txt">An Error Occured.</p>}
            </section>
          </form>
        </div>
      </div>
    );
  }

  return <Quiz questions={questions} setIsStart={setIsStart} />;
};

export default SetupQuiz;

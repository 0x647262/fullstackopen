import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  let good = props.good;
  let neutral = props.neutral;
  let bad = props.bad;
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positive = good / all;

  let collected = (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positive) ? 0 : positive}</p>
    </div>
  );

  let waiting = (
    <div>
      <p>No feedback given</p>
    </div>
  );

  return all === 0 ? waiting : collected;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
  };

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };

  const updateBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => updateGood()} text="good" />
      <Button handleClick={() => updateNeutral()} text="neutral" />
      <Button handleClick={() => updateBad()} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

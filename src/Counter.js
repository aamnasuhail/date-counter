import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function incStep() {
    setStep((step) => step + 1);
  }
  function decStep() {
    if (step > 1) setStep((step) => step - 1);
  }

  function incCount() {
    setCount((count) => count + step);
  }
  function decCount() {
    setCount((count) => count - step);
  }
  return (
    <div className="container">
      <div className="flex">
        <button className="btn" onClick={decStep}>
          -
        </button>
        <p>Step : {step}</p>
        <button className="btn" onClick={incStep}>
          +
        </button>
      </div>
      <div className="flex">
        <button className="btn" onClick={decCount}>
          -
        </button>
        <p>Count : {count}</p>
        <button className="btn" onClick={incCount}>
          +
        </button>
      </div>
      <div className="date-container">
        <span>{count === 0 ? "Today is" : ""}</span>
        <span>
          {count > 0
            ? `${count} ${count === 1 ? "day" : "days"} from today is`
            : null}
        </span>
        <span>
          {count < 0
            ? `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was`
            : null}
        </span>
        <span> {date.toDateString()} </span>
      </div>
    </div>
  );
};

export default Counter;
